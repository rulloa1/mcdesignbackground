import re, os

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

assets_dir = os.path.join('public', 'projects', 'assets')
available = set(os.listdir(assets_dir))

# Reconstruct all filenames from Array.from patterns like:
# Array.from({length:47}, (_,i) => BASE + 'miami-beach-' + (i+1) + '.webp')
array_patterns = re.findall(
    r"Array\.from\(\{length:(\d+)\},\s*\(_,i\)\s*=>\s*BASE \+ '([^']+)' \+ \(i\+(\d+)\) \+ '([^']+)'\)",
    html
)

# Single file references: BASE + 'filename.ext'
single_refs = re.findall(r"BASE \+ '([^']+\.[a-z]+)'", html)

# Cover images from projectsData: coverImage: 'projects/assets/...'
cover_refs = re.findall(r"projects/assets/([^'\">\s]+\.[a-z]+)", html)

all_files = set(cover_refs)

# Add single refs
for r in single_refs:
    all_files.add(r)

# Expand array patterns
for length, prefix, start, ext in array_patterns:
    for i in range(int(start), int(start) + int(length)):
        all_files.add(f"{prefix}{i}{ext}")

print(f"Total unique files referenced in code: {len(all_files)}")
missing = sorted([f for f in all_files if f not in available])
found = sorted([f for f in all_files if f in available])

print(f"Found on disk: {len(found)}")
print(f"MISSING from disk: {len(missing)}")
for m in missing:
    print(f"  MISSING: {m}")
