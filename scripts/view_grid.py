import re
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

m = re.search(r'<div class="portfolio-grid">', content)
if m:
    print(content[m.start():m.start()+2000])
