import sys
from PIL import Image

def remove_background_better(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    bg_color = datas[0]
    
    new_data = []
    for item in datas:
        r, g, b, a = item
        # Background is close to white. We want to extract dark pixels.
        ratio_r = r / max(bg_color[0], 1)
        ratio_g = g / max(bg_color[1], 1)
        ratio_b = b / max(bg_color[2], 1)
        
        min_ratio = min(ratio_r, ratio_g, ratio_b)
        
        if min_ratio >= 0.95:
            new_data.append((255, 255, 255, 0))
        else:
            # Estimate alpha based on darkness
            alpha_f = max(0.0, min(1.0, (0.95 - min_ratio) / 0.95))
            
            # Boost alpha curve so it doesn't get too transparent
            alpha_f = alpha_f ** 0.6
            
            alpha_int = int(alpha_f * 255)
            
            if alpha_f > 0:
                fr = max(0, min(255, int((r - bg_color[0] * (1 - alpha_f)) / alpha_f)))
                fg = max(0, min(255, int((g - bg_color[1] * (1 - alpha_f)) / alpha_f)))
                fb = max(0, min(255, int((b - bg_color[2] * (1 - alpha_f)) / alpha_f)))
                new_data.append((fr, fg, fb, alpha_int))
            else:
                new_data.append((255, 255, 255, 0))

    img.putdata(new_data)
    img.save(output_path, "PNG")
    print("Success")

remove_background_better("public/assets/progenics-logo.png", "public/assets/progenics-logo.png")
