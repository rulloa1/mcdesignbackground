import sys
from PIL import Image

def color_to_alpha_white(img_path, out_path):
    print(f"Applying Color-to-Alpha (White) to {img_path}...")
    img = Image.open(img_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()
    
    min_x, min_y = width, height
    max_x, max_y = 0, 0
    
    for x in range(width):
        for y in range(height):
            r, g, b, orig_a = pixels[x, y]
            
            nr, ng, nb = r / 255.0, g / 255.0, b / 255.0
            
            a = 1.0 - min(nr, ng, nb)
            
            if a <= 0.001:
                pixels[x, y] = (0, 0, 0, 0)
            else:
                new_r = (nr - 1.0 + a) / a
                new_g = (ng - 1.0 + a) / a
                new_b = (nb - 1.0 + a) / a
                
                new_r = max(0.0, min(1.0, new_r))
                new_g = max(0.0, min(1.0, new_g))
                new_b = max(0.0, min(1.0, new_b))
                
                final_a = a * (orig_a / 255.0)
                pixels[x, y] = (int(new_r * 255), int(new_g * 255), int(new_b * 255), int(final_a * 255))
                
                if final_a > 0.01:
                    min_x = min(min_x, x)
                    min_y = min(min_y, y)
                    max_x = max(max_x, x)
                    max_y = max(max_y, y)

    # Crop
    if min_x <= max_x and min_y <= max_y:
        img = img.crop((min_x, min_y, max_x + 1, max_y + 1))
        
    img.save(out_path, "PNG")
    print(f"Saved to {out_path} with size {img.size}")

import os
if os.path.exists('logo-horizontal.png'):
    color_to_alpha_white('logo-horizontal.png', 'logo-horizontal.png')

if os.path.exists('logo-vertical.png'):
    color_to_alpha_white('logo-vertical.png', 'logo-vertical.png')

if os.path.exists('mcdesign-logo.png'):
    color_to_alpha_white('mcdesign-logo.png', 'mcdesign-logo.png')

