from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from time import sleep
import csv
import re

driver = webdriver.Chrome(executable_path ='C:/Users/VietAnh/Downloads/chromedriver102/chromedriver.exe')

driver.get("https://vnexpress.net/the-thao")



with open('vnexpressThethao.csv', 'w', newline='',encoding='utf-8') as csvfile:
  spamwriter = csv.writer(csvfile,delimiter='|', quoting=csv.QUOTE_MINIMAL)
  dem = 0
  for page in range(0,7):
    sleep(7)
    #title
    posts = driver.find_elements_by_css_selector("div.list-news-subfolder article.item-news-common")

    for post in posts:   
      try:
        try:
          #title
          t1 = post.find_element_by_css_selector("h3 a")
          #link
          t2 = post.find_element_by_css_selector("h3 a")
        except:
          t1 = post.find_element_by_css_selector("h2 a")
          #link
          t2 = post.find_element_by_css_selector("h2 a")

        #thumbnail
        t3 = post.find_element_by_css_selector("div a picture img")
        #discription
        t4 = post.find_element_by_css_selector("p a[data-thumb='1']")


        title = t1.text
        link = t2.get_attribute('href')
        thumbnail = t3.get_attribute('src')
        discrip = t4.text

        print("=========thu:  ",dem+1)
        print(title)
        print(link)
        print(thumbnail)
        print(discrip)
        print("======================= \n\n")
        spamwriter.writerow([title,link,thumbnail,discrip,"thể thao","vnexpress.net","unknow"])
        dem +=1
      except:
        pass

   

print("=======================")
