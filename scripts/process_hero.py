from PIL import Image
import sys

img_path = "public/Photos/hero-full-bg.png"
try:
    img = Image.open(img_path).convert("RGBA")
    width, height = img.size
    print(f"Image dimensions: {width}x{height}")
    
    # We want to use this entire image as the background.
    # We just need to paint the top ~100px (navbar area) with the solid background color found around there.
    # Let's sample a pixel from the left side, slightly below the navbar.
    bg_color = img.getpixel((50, 150))
    print(f"Background color sampled at (50, 150): {bg_color}")
    
    # Paint top navbar area
    for y in range(0, 120):
        for x in range(0, width):
            img.putpixel((x, y), bg_color)
            
    # Also paint over the slider controls which are typically in the bottom right corner.
    # Let's say bottom 150px, right 300px.
    # We will sample the color near the bottom right but outside the slider.
    slider_bg_color = img.getpixel((width - 300, height - 50))
    print(f"Slider background color sampled: {slider_bg_color}")
    for y in range(height - 150, height):
        for x in range(width - 300, width):
            # We can blend it or just solid fill. The background is mostly dark there.
            img.putpixel((x, y), slider_bg_color)
            
    img.save("public/Photos/hero-bg-processed.png")
    print("Saved public/Photos/hero-bg-processed.png")
except Exception as e:
    print(f"Error: {e}")
