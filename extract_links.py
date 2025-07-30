import re

with open('src/components/MegaMenu.tsx', 'r') as f:
    content = f.read()

links = re.findall(r'{ title: \'([^\']*)\', href: \'([^\']*)\' }', content)

with open('links.csv', 'w') as f:
    for title, href in links:
        f.write(f'{title},{href}\n')
