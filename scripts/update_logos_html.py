import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Update horizontal logo
html = html.replace(
    '<img src="logo-horizontal.png" alt="MC Michael Chandler Logo" style="height: 48px; width: auto; object-fit: contain;" />',
    '<img src="logo-horizontal.png" alt="MC Michael Chandler Logo" style="height: 40px; width: auto; display: block;" />'
)

# Update vertical logo
html = html.replace(
    '<img src="logo-vertical.png" alt="MC Michael Chandler Logo" loading="lazy" decoding="async" style="height: 100px; width: auto; object-fit: contain; filter: invert(1) brightness(2) contrast(1.2);" />',
    '<img src="logo-vertical.png" alt="MC Michael Chandler Logo" loading="lazy" decoding="async" style="height: 96px; width: auto; display: block;" />'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("HTML logos updated!")
