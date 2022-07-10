from pymongo import MongoClient
import pprint
import pandas
import recordlinkage
from recordlinkage.preprocessing import clean


client = MongoClient()
client = MongoClient('mongodb://localhost:27017/')
db = client['tich_hop']
collection = db['newspaper']

first_news = collection.find_one()
field_names = []
for i in first_news.keys():
    field_names.append(i)
myquery = {}
for i in field_names:
    if i != i.lower():
        myquery[i] = i.lower()

print(myquery)
collection.update_many({}, {"$rename" : myquery})