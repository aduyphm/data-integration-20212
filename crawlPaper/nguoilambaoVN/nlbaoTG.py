from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from time import sleep
import csv
import re

driver = webdriver.Chrome(executable_path ='C:/Users/VietAnh/Downloads/chromedriver102/chromedriver.exe')

driver.get("http://nguoilambao.vn/the-gioi/")



with open('nlbaoTG.csv', 'w', newline='',encoding='utf-8') as csvfile:
  spamwriter = csv.writer(csvfile,delimiter='|', quoting=csv.QUOTE_MINIMAL)
  for page in range(0,12):
    sleep(15)
    #title
    t1 = driver.find_elements_by_css_selector("article[class='post-item'] h2 a")
    #link
    t2 = driver.find_elements_by_css_selector("article[class='post-item'] h2 a")
    #thumbnail
    t3 = driver.find_elements_by_css_selector("article[class='post-item'] figure a img")
    #meta (time)
    t4 = driver.find_elements_by_css_selector("article[class='post-item'] div")
    #discription
    t5 = driver.find_elements_by_css_selector("article[class='post-item'] p")

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
      spamwriter.writerow([title,link,thumbnail,discrip,"thế giới","nguoilambao.vn",time])
    # sleep(2)
    # driver.find_element_by_css_selector("a[id='ctl00_mainContent_ContentList1_pager_nextControl']").click()

print("=======================")
