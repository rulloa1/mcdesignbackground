import os, json, re

try:
    with open('projects-data.js', 'r', encoding='utf-8') as f:
        data = f.read()
except FileNotFoundError:
    print('projects-data.js not found')
    exit()

# Extract all explicit strings ending in webp, jpg, png
explicit_refs = re.findall(r'[\'"`]?([^"\'`]+\.(?:webp|jpg|png|JPG|JPEG|jpeg))[\'"`]?', data)

# Parse Array.from constructs
# We can just extract all strings inside the template literals in Array.from and substitute
array_refs = re.findall(r'Array\.from\(\{length:\s*(\d+)\}.+?projects/assets/([^$]+)\$\{(?:i \+ (\d+)|String\(i \+ (\d+)\)\.padStart\((\d+),\s*\'0\'\))\}\.webp', data)

all_expected = set()

for ref in explicit_refs:
    if ref.startswith('projects/'):
        all_expected.add(ref)

for match in array_refs:
    length = int(match[0])
    prefix = match[1]
    
    if match[2]: # i + N
        start_idx = int(match[2])
        for i in range(length):
            all_expected.add(f'projects/assets/{prefix}{i + start_idx}.webp')
    elif match[3] and match[4]: # String(i + N).padStart(pad, '0')
        start_idx = int(match[3])
        pad = int(match[4])
        for i in range(length):
            num = str(i + start_idx).zfill(pad)
            all_expected.add(f'projects/assets/{prefix}{num}.webp')

missing = []
for file_path in all_expected:
    normalized_path = os.path.normpath(file_path)
    if not os.path.exists(normalized_path):
        missing.append(file_path)

print(f'Total referenced images: {len(all_expected)}')
print(f'Missing images: {len(missing)}')
for m in sorted(missing):
    print(f'  {m}')
