from PIL import Image
import sys

img_path = "public/Photos/hero-engineer-clean.png"
try:
    img = Image.open(img_path).convert("RGBA")
    width, height = img.size
    # Sample a few pixels on the left edge (x=0)
    samples = [img.getpixel((0, int(height * i / 10))) for i in range(1, 10)]
    print(f"Left edge samples: {samples}")
except Exception as e:
    print(f"Error: {e}")
