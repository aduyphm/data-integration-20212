from pymongo import MongoClient
import pprint
import pandas
import recordlinkage
from recordlinkage.preprocessing import clean


client = MongoClient()
client = MongoClient('mongodb://localhost:27017/')
db = client['tich_hop']
collection = db['newspaper']
myquery = {}
first_news = collection.find_one()
for i in (first_news.keys()):
    myquery[i] = None

x = collection.delete_many(myquery)

print(x.deleted_count, " documents deleted.")

myquery = {}
first_news = collection.find_one()
for i in (first_news.keys()):
    myquery = {}
    myquery[i] = { "$exists" : False}
    x = collection.delete_many(myquery)

    print(x.deleted_count, " documents deleted.")


