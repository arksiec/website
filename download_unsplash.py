import urllib.request
import os
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

images = {
    # Power Grid / Substation / Electrical
    'hero-power-grid.jpg': 'https://images.unsplash.com/photo-1473643033507-6bcfc23ff7ea?w=1920&q=80',
    'hero-substation-twilight.jpg': 'https://images.unsplash.com/photo-1544426541-657df332308e?w=1920&q=80',
    'project-electrical-branded.jpg': 'https://images.unsplash.com/photo-1544426541-657df332308e?w=1080&q=80',
    'service-electrical-ehv.jpg': 'https://images.unsplash.com/photo-1473643033507-6bcfc23ff7ea?w=1080&q=80',

    # Civil / Construction / Megastructure
    'hero-civil-megastructure.jpg': 'https://images.unsplash.com/photo-1541888086925-0c7739818db6?w=1920&q=80',
    'hero-infrastructure-panorama.jpg': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80',
    'project-civil-branded.jpg': 'https://images.unsplash.com/photo-1541888086925-0c7739818db6?w=1080&q=80',
    'service-civil-structural.jpg': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1080&q=80',

    # BIM / Engineering office
    'hero-bim-workstation.jpg': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80',
    'about-modern-tower.jpg': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1080&q=80',
    'about-blueprint-review.jpg': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1080&q=80',
    'services-hero-bim.jpg': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80',

    # MEPF / PMC
    'project-mepf-branded.jpg': 'https://images.unsplash.com/photo-1504307651254-35680f356f58?w=1080&q=80',
    'project-pmc-branded.jpg': 'https://images.unsplash.com/photo-1516216628859-9bcce0c98323?w=1080&q=80',
    'service-mepf-hvac.jpg': 'https://images.unsplash.com/photo-1504307651254-35680f356f58?w=1080&q=80',
    'service-pmc-management.jpg': 'https://images.unsplash.com/photo-1516216628859-9bcce0c98323?w=1080&q=80',
}

def download_images():
    base_dir = 'public/Photos'
    for filename, url in images.items():
        filepath = os.path.join(base_dir, filename)
        print(f"Downloading {filename}...")
        try:
            urllib.request.urlretrieve(url, filepath)
        except Exception as e:
            print(f"Failed to download {filename}: {e}")

if __name__ == "__main__":
    download_images()
