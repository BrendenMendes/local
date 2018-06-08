# import cv2
from google.cloud import vision
import io
import numpy as np
import time
# import pytesseract
# from PIL import Image

image_file= io.open('IMAG1067.jpg','rb')
content = image_file.read()
vision_client = vision.Client()
image = vision_client.image(content=content)

want = image.detect_full_text()

print(want.text)
