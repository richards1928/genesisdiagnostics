import os
from PIL import Image
import numpy as np

def generate_favicons():
    logo_path = os.path.join('public', 'assets', 'genesis-logo.png')
    if not os.path.exists(logo_path):
        raise FileNotFoundError(f"Logo not found at {logo_path}")

    logo = Image.open(logo_path)
    
    # Crop the official medical cross emblem
    cross_raw = logo.crop((0, 22, 103, 127))
    bbox = cross_raw.split()[-1].getbbox()
    cross = cross_raw.crop(bbox).convert('RGBA')

    # Fill the inner cutout with clean white so it is crisp against both white and dark browser themes
    arr = np.array(cross)
    arr_wc = arr.copy()
    for y in range(35, 75):
        for x in range(25, 78):
            if arr[y, x, 3] < 180:
                orig_a = arr[y, x, 3] / 255.0
                r = int(arr[y, x, 0] * orig_a + 255 * (1 - orig_a))
                g = int(arr[y, x, 1] * orig_a + 255 * (1 - orig_a))
                b = int(arr[y, x, 2] * orig_a + 255 * (1 - orig_a))
                arr_wc[y, x] = [r, g, b, 255]

    cross_prepared = Image.fromarray(arr_wc)
    cw, ch = cross_prepared.size

    def create_square_icon(size, pad_ratio=0.08):
        canvas = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        pad = int(size * pad_ratio)
        target = size - 2 * pad
        scale = min(target / cw, target / ch)
        nw, nh = int(cw * scale), int(ch * scale)
        resized = cross_prepared.resize((nw, nh), Image.Resampling.LANCZOS)
        ox = (size - nw) // 2
        oy = (size - nh) // 2
        canvas.paste(resized, (ox, oy), resized)
        return canvas

    icon_192 = create_square_icon(192)
    icon_180 = create_square_icon(180)
    icon_48  = create_square_icon(48)

    # Save to public directory
    public_dir = 'public'
    icon_192.save(os.path.join(public_dir, 'favicon.png'), 'PNG')
    icon_48.save(os.path.join(public_dir, 'favicon-48x48.png'), 'PNG')
    icon_180.save(os.path.join(public_dir, 'apple-touch-icon.png'), 'PNG')

    # Save multi-size favicon.ico
    icon_192.save(
        os.path.join(public_dir, 'favicon.ico'),
        format='ICO',
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64)]
    )

    print("Successfully generated favicon.ico, favicon.png, favicon-48x48.png, apple-touch-icon.png")

if __name__ == '__main__':
    generate_favicons()
