from PIL import Image
import pytesseract
import sys

img_path = "public/Photos/hero-full-bg.png"
try:
    text = pytesseract.image_to_string(Image.open(img_path))
    print("OCR Text found:")
    print(text)
except Exception as e:
    print(f"Error: {e}")
