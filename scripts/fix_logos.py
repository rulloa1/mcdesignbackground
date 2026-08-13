import sys
from PIL import Image

def remove_background(img_path, out_path, tolerance=32, expand=1):
    print(f"Processing {img_path}...")
    img = Image.open(img_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()
    
    # 1. Create a mask of what to remove (1 = remove, 0 = keep)
    mask = [[0 for _ in range(height)] for _ in range(width)]
    for x in range(width):
        for y in range(height):
            r, g, b, a = pixels[x, y]
            dist = max(255 - r, 255 - g, 255 - b)
            if dist <= tolerance:
                mask[x][y] = 1
                
    # 2. Expand the mask (dilate)
    if expand > 0:
        new_mask = [[0 for _ in range(height)] for _ in range(width)]
        for x in range(width):
            for y in range(height):
                if mask[x][y] == 1:
                    new_mask[x][y] = 1
                else:
                    # check neighbors
                    remove = False
                    for dx in range(-expand, expand + 1):
                        for dy in range(-expand, expand + 1):
                            nx, ny = x + dx, y + dy
                            if 0 <= nx < width and 0 <= ny < height:
                                if mask[nx][ny] == 1:
                                    remove = True
                                    break
                        if remove:
                            break
                    if remove:
                        new_mask[x][y] = 1
        mask = new_mask
        
    # 3. Apply mask and calculate alpha for anti-aliasing (smooth transition)
    # Actually, the user's instructions just hard delete. Let's do that.
    # We will also trim transparent pixels as requested.
    min_x, min_y = width, height
    max_x, max_y = 0, 0
    
    for x in range(width):
        for y in range(height):
            if mask[x][y] == 1:
                r, g, b, a = pixels[x, y]
                pixels[x, y] = (r, g, b, 0)
            else:
                r, g, b, a = pixels[x, y]
                # If it's near the edge, maybe we should multiply the color to be more gold/gray, 
                # but simple deletion is what was requested.
                if a > 0:
                    min_x = min(min_x, x)
                    min_y = min(min_y, y)
                    max_x = max(max_x, x)
                    max_y = max(max_y, y)
                    
    # 4. Crop
    if min_x <= max_x and min_y <= max_y:
        img = img.crop((min_x, min_y, max_x + 1, max_y + 1))
        
    img.save(out_path, "PNG")
    print(f"Saved to {out_path} with size {img.size}")

# The user has logo-horizontal.png and logo-vertical.png
import os
if os.path.exists('logo-horizontal.png'):
    remove_background('logo-horizontal.png', 'logo-horizontal.png')
else:
    print("logo-horizontal.png not found")

if os.path.exists('logo-vertical.png'):
    remove_background('logo-vertical.png', 'logo-vertical.png')
else:
    print("logo-vertical.png not found")

if os.path.exists('mcdesign-logo.png'):
    remove_background('mcdesign-logo.png', 'mcdesign-logo.png')

