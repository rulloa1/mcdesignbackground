import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

m = re.search(r'<div class="selected-works-grid">.*?</a>', content, re.DOTALL)
if m:
    print("Found selected-works-grid:\n", m.group(0))

m2 = re.search(r'<div class="portfolio-card reveal".*?</div>\s*</div>\s*</div>', content, re.DOTALL)
if m2:
    print("\nFound portfolio-card:\n", m2.group(0))
