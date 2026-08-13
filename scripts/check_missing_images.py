import os, json, re

try:
    with open('projects-data.js', 'r', encoding='utf-8') as f:
        data = f.read()
except FileNotFoundError:
    print('projects-data.js not found')
    exit()

# Extract all explicit strings ending in webp, jpg, png
all_expected = set()

# 1. Simple strings
simple_refs = re.findall(r'[\'"](projects/[^\'"]+\.(?:webp|jpg|png|jpeg))[\'"]', data, re.I)
for ref in simple_refs:
    all_expected.add(ref)

# 2. Array.from({length: N}, ...) patterns
# We look for the length and the template string
array_matches = re.finditer(r'Array\.from\(\{length:\s*(\d+)\}.*?`projects/assets/([^`]+)`', data, re.S)
for match in array_matches:
    length = int(match.group(1))
    template = match.group(2)
    
    for i in range(length):
        # Handle ${i + N}
        def repl(m):
            expr = m.group(1)
            # Simple i + N evaluation
            if expr.strip() == 'i': return str(i)
            if '+' in expr:
                parts = expr.split('+')
                return str(i + int(parts[1].strip()))
            return str(i)

        # Handle padStart if present
        if 'padStart' in template:
            # projects/assets/nfl-${String(i + 2).padStart(3, '0')}
            res = re.sub(r'\$\{String\(i \+ (\d+)\)\.padStart\((\d+), [\'"]0[\'"]\)\}', 
                         lambda m: str(i + int(m.group(1))).zfill(int(m.group(2))), 
                         template)
        else:
            res = re.sub(r'\$\{([^}]+)\}', repl, template)
            
        all_expected.add(f'projects/assets/{res}')

missing = []
for file_path in all_expected:
    normalized_path = os.path.normpath(file_path)
    if not os.path.exists(normalized_path):
        missing.append(file_path)

print(f'Total referenced images: {len(all_expected)}')
print(f'Missing images: {len(missing)}')
for m in sorted(missing):
    print(f'  {m}')
