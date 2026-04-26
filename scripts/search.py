import re
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

def search(q):
    matches = list(re.finditer(q, content, re.IGNORECASE))
    for i, m in enumerate(matches):
        if i > 2:
            print(f'And {len(matches)-3} more...')
            break
        print('--- MATCH ---')
        print(content[max(0, m.start()-100):min(len(content), m.end()+100)])

search(r'Syracuse House')
search(r'data-project="')
