import os
import glob
from PIL import Image
import re

def convert_dir_to_webp(directory):
    files = []
    files.extend(glob.glob(f'{directory}/*.jpg'))
    files.extend(glob.glob(f'{directory}/*.jpeg'))
    files.extend(glob.glob(f'{directory}/*.png'))
    
    for f in files:
        if 'logo' in f.lower() or 'cover' in f.lower() or 'webp' in f.lower(): 
            continue # We might not want to mess with specific files unless strictly needed. But let's convert frames for sure.

frames = glob.glob('public/ezgif-frame-*.jpg')
for f in frames:
    webp_path = f.replace('.jpg', '.webp')
    if not os.path.exists(webp_path):
        try:
            img = Image.open(f)
            img.save(webp_path, 'WEBP', quality=80)
            print(f"Converted {f} to {webp_path}")
        except Exception as e:
            print(f"Error converting {f}: {e}")

# Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace frame path in JS
html = re.sub(r'public/ezgif-frame-\$\{n\}\.jpg', r'public/ezgif-frame-${n}.webp', html)

# Add lazy loading attributes to all images
def add_lazy_attrs(match):
    img_tag = match.group(0)
    changed = False
    if 'loading=' not in img_tag:
        img_tag = img_tag.replace('<img ', '<img loading="lazy" ')
        changed = True
    if 'decoding=' not in img_tag:
        img_tag = img_tag.replace('<img ', '<img decoding="async" ')
        changed = True
    return img_tag

html = re.sub(r'<img [^>]+>', add_lazy_attrs, html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Image conversion and HTML updates completed.")
