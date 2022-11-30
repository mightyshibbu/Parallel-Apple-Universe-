import pyautogui
import time
time.sleep(4)
count=0
while count<=1000:
    pyautogui.typewrite("!!! You are being spammed !!!")
    pyautogui.press("enter")
    count = count+1