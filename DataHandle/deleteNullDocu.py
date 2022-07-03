from pymongo import MongoClient
import pprint
import pandas
import recordlinkage
from recordlinkage.preprocessing import clean


client = MongoClient()
client = MongoClient('mongodb+srv://kudo313:kudo_321@cluster1.mza5o.mongodb.net/admin?authSource=admin&replicaSet=atlas-p2oirl-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true')
db = client['tich_hop']
collection = db['newspaper']

myquery = {}
first_news = collection.find_one()
for i in (first_news.keys()):
    myquery[i] = None

x = collection.delete_many(myquery)

print(x.deleted_count, " documents deleted.")