import os
import re
import random

user_images = []
for f in os.listdir('public/Photos/user/'):
    if f.startswith('media_'):
        user_images.append(f'/Photos/user/{f}')

# Shuffle to get different images
random.seed(42)
random.shuffle(user_images)

img_idx = 0

def replace_img(match):
    global img_idx
    img = user_images[img_idx % len(user_images)]
    img_idx += 1
    return f'src="{img}"'

page_dir = 'src/pages'
for filename in os.listdir(page_dir):
    if filename.endswith('.ts'):
        filepath = os.path.join(page_dir, filename)
        with open(filepath, 'r') as f:
            content = f.read()
        
        # We also need to ignore the logo replacements if they are using /Photos/
        # But wait! Logos are probably not in /Photos/ in the page contents?
        # Actually in main.ts they are. In pages, only background/feature images.
        new_content = re.sub(r'src="/Photos/[^"]+"', replace_img, content)
        
        with open(filepath, 'w') as f:
            f.write(new_content)
