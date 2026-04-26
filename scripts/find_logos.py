import re
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

imgs = re.findall(r'<img[^>]+logo[^>]+>', html, re.IGNORECASE)
for img in imgs:
    print(img)
