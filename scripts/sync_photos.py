import os
import shutil
import re

onedrive_dir = r"C:\Users\roryu\OneDrive\projects"
target_dir = r"c:\Users\roryu\mcdesignbackground"

# 1. Gather all files in OneDrive
onedrive_files = {} # filename -> full_path
for root, dirs, files in os.walk(onedrive_dir):
    for f in files:
        if f.lower().endswith(('.webp', '.jpg', '.jpeg', '.png')):
            onedrive_files[f] = os.path.join(root, f)

# 2. Gather all expected files from projects-data.js
try:
    with open('projects-data.js', 'r', encoding='utf-8') as f:
        data = f.read()
except FileNotFoundError:
    print('projects-data.js not found')
    exit()

explicit_refs = re.findall(r'[\'"`]?([^"\'`]+\.(?:webp|jpg|png|JPG|JPEG|jpeg))[\'"`]?', data)
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

# 3. Copy files and check missing
missing = []
copied_count = 0

for rel_path in all_expected:
    filename = os.path.basename(rel_path)
    full_target_path = os.path.join(target_dir, os.path.normpath(rel_path))
    
    # If the file is in OneDrive, copy it over (overwriting old ones)
    if filename in onedrive_files:
        os.makedirs(os.path.dirname(full_target_path), exist_ok=True)
        shutil.copy2(onedrive_files[filename], full_target_path)
        copied_count += 1
    elif not os.path.exists(full_target_path):
        # If it wasn't in OneDrive AND it doesn't exist in target, it's missing
        missing.append(rel_path)

print(f"Total expected images: {len(all_expected)}")
print(f"Successfully copied/updated from OneDrive: {copied_count}")
print(f"Missing images (not on disk and not in OneDrive): {len(missing)}")

for m in sorted(missing):
    print(f"  MISSING: {m}")
