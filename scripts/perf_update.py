import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

def add_lazy_attrs(match):
    img_tag = match.group(0)
    # Don't add lazy loading to the logo or the first image or hero images
    if 'logo' in img_tag.lower() or 'hero' in img_tag.lower():
        return img_tag
    
    if 'loading=' not in img_tag:
        img_tag = img_tag.replace('<img ', '<img loading="lazy" ')
    if 'decoding=' not in img_tag:
        img_tag = img_tag.replace('<img ', '<img decoding="async" ')
    return img_tag

# Only target <img> tags
html = re.sub(r'<img [^>]+>', add_lazy_attrs, html)

# Let's also check aria-labels for links and buttons
def add_aria_label_to_a(match):
    a_tag = match.group(0)
    if 'aria-label' not in a_tag:
        # try to extract some text or class to guess a label
        label = "Link"
        if 'selected-work' in a_tag:
            label = "View Selected Work"
        elif 'btn' in a_tag:
            label = "Button"
        else:
            return a_tag
        a_tag = a_tag.replace('<a ', f'<a aria-label="{label}" ')
    return a_tag

# Apply simple ARIA labels if missing on generic buttons
html = re.sub(r'<a [^>]+>', add_aria_label_to_a, html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Performance and accessibility updates applied to HTML.")
