from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from time import sleep
import csv
import re

driver = webdriver.Chrome(executable_path ='C:/Users/VietAnh/Downloads/chromedriver102/chromedriver.exe')

driver.get("https://laodong.vn/giao-duc/?page=1")



with open('laodongGiaoduc.csv', 'w', newline='',encoding='utf-8') as csvfile:
  spamwriter = csv.writer(csvfile,delimiter='|', quoting=csv.QUOTE_MINIMAL)
  for page in range(0,15):
    sleep(8)
    #title
    t1 = driver.find_elements_by_css_selector("article[class='v4 p2c m002'] div a[class='link-title'] h2")
    #link
    t2 = driver.find_elements_by_css_selector("article[class='v4 p2c m002'] div a[class='link-img']")
    #thumbnail
    t3 = driver.find_elements_by_css_selector("article[class='v4 p2c m002'] div a[class='link-img'] figure img")
    #meta (time)
    t4 = driver.find_elements_by_css_selector("article[class='v4 p2c m002'] div div[class='info'] span")
    #discription
    t5 = driver.find_elements_by_css_selector("article[class='v4 p2c m002'] div div[class='chapeau']")

    for i in range(0,len(t1)):
      title = t1[i].text
      link = t2[i].get_attribute('href')
      thumbnail = t3[i].get_attribute('src')
      time = t4[i].text
      discrip = t5[i].text

      print("=========thu:  ",page*20+i)
      print(title)
      print(link)
      print(thumbnail)
      print(time)
      print(discrip)
      print("======================= \n\n")
      #title - link - thumb - sapo(discrip) - category - source - time
      spamwriter.writerow([title,link,thumbnail,discrip,"giáo dục","laodong.vn",time])
    # sleep(2)
    # driver.find_element_by_css_selector("a[id='ctl00_mainContent_ContentList1_pager_nextControl']").click()

print("=======================")
