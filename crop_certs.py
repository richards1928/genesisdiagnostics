import cv2
import numpy as np
import os
import glob

def process_image(img_path, out_size=(1200, 900)):
    # Read image
    img = cv2.imread(img_path)
    if img is None:
        print(f"Failed to load {img_path}")
        return
        
    orig_img = img.copy()
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Apply bilateral filter to reduce noise while keeping edges sharp
    blur = cv2.bilateralFilter(gray, 9, 75, 75)
    
    # Edge detection
    edges = cv2.Canny(blur, 30, 150)
    
    # Dilate edges
    kernel = np.ones((5,5), np.uint8)
    dilated = cv2.dilate(edges, kernel, iterations=1)
    
    # Find contours
    contours, hierarchy = cv2.findContours(dilated, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    # Find largest quadrilateral
    largest_area = 0
    best_cnt = None
    
    for cnt in contours:
        area = cv2.contourArea(cnt)
        if area > 10000:
            peri = cv2.arcLength(cnt, True)
            approx = cv2.approxPolyDP(cnt, 0.02 * peri, True)
            if len(approx) == 4 and area > largest_area:
                largest_area = area
                best_cnt = approx
                
    # If a quad is found and it covers at least 15% of the image, we assume it's the certificate frame
    img_area = img.shape[0] * img.shape[1]
    if best_cnt is not None and largest_area > 0.15 * img_area:
        print(f"Found certificate contour in {img_path}")
        # Order points (top-left, top-right, bottom-right, bottom-left)
        pts = best_cnt.reshape(4, 2)
        rect = np.zeros((4, 2), dtype="float32")
        
        s = pts.sum(axis=1)
        rect[0] = pts[np.argmin(s)]
        rect[2] = pts[np.argmax(s)]
        
        diff = np.diff(pts, axis=1)
        rect[1] = pts[np.argmin(diff)]
        rect[3] = pts[np.argmax(diff)]
        
        (tl, tr, br, bl) = rect
        widthA = np.sqrt(((br[0] - bl[0]) ** 2) + ((br[1] - bl[1]) ** 2))
        widthB = np.sqrt(((tr[0] - tl[0]) ** 2) + ((tr[1] - tl[1]) ** 2))
        maxWidth = max(int(widthA), int(widthB))
        
        heightA = np.sqrt(((tr[0] - br[0]) ** 2) + ((tr[1] - br[1]) ** 2))
        heightB = np.sqrt(((tl[0] - bl[0]) ** 2) + ((tl[1] - bl[1]) ** 2))
        maxHeight = max(int(heightA), int(heightB))
        
        dst = np.array([
            [0, 0],
            [maxWidth - 1, 0],
            [maxWidth - 1, maxHeight - 1],
            [0, maxHeight - 1]], dtype="float32")
            
        M = cv2.getPerspectiveTransform(rect, dst)
        warped = cv2.warpPerspective(orig_img, M, (maxWidth, maxHeight))
        
    else:
        # Fallback: Just crop 10% from edges
        print(f"No suitable contour found for {img_path}, using fallback.")
        h, w = img.shape[:2]
        warped = img[int(h*0.1):int(h*0.9), int(w*0.1):int(w*0.9)]
        
    # Now pad and resize to out_size (1200x900) maintaining aspect ratio
    target_w, target_h = out_size
    h, w = warped.shape[:2]
    
    scale = min(target_w / w, target_h / h)
    new_w = int(w * scale)
    new_h = int(h * scale)
    
    resized = cv2.resize(warped, (new_w, new_h), interpolation=cv2.INTER_AREA)
    
    # Create white canvas
    canvas = np.ones((target_h, target_w, 3), dtype=np.uint8) * 255
    
    # Paste centered
    x_offset = (target_w - new_w) // 2
    y_offset = (target_h - new_h) // 2
    
    canvas[y_offset:y_offset+new_h, x_offset:x_offset+new_w] = resized
    
    # Save back
    cv2.imwrite(img_path, canvas)
    print(f"Successfully processed and saved {img_path}")

target_images = [
    "public/assets/prathap-board.png",
    "public/assets/prathap-fifa.png",
    "public/assets/prathap-times-health.png",
    "public/assets/prathap-ista.png"
]

for img_path in target_images:
    process_image(img_path)
