import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

m = re.search(r'<section id="work".*?</section>', content, re.IGNORECASE | re.DOTALL)
if m:
    with open('work_section.txt', 'w', encoding='utf-8') as out:
        out.write(m.group(0))

m2 = re.search(r'<section id="services".*?</section>', content, re.IGNORECASE | re.DOTALL)
if m2:
    with open('services_section.txt', 'w', encoding='utf-8') as out:
        out.write(m2.group(0))

m3 = re.search(r'<section id="contact".*?</section>', content, re.IGNORECASE | re.DOTALL)
if m3:
    with open('contact_section.txt', 'w', encoding='utf-8') as out:
        out.write(m3.group(0))

m4 = re.search(r'<section id="process".*?</section>', content, re.IGNORECASE | re.DOTALL)
if m4:
    with open('process_section.txt', 'w', encoding='utf-8') as out:
        out.write(m4.group(0))

