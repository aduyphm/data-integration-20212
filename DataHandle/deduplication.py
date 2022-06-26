from pymongo import MongoClient
import pprint
import pandas
import recordlinkage
client = MongoClient()
client = MongoClient('mongodb+srv://kudo313:kudo_321@cluster1.mza5o.mongodb.net/admin?authSource=admin&replicaSet=atlas-p2oirl-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true')
db = client['tich_hop']
collection = db['newspaper']
i = 0
first_news = collection.find_one()
data = {}
for i in first_news.keys():
    data[i] = []
print(data)
j = 0
print(type(pandas.DataFrame.from_dict(b)))
for post in collection.find():
    for i in post.keys():
        data[i].append(post[i])
    j += 1
    if j > 5:
        break
pprint.pprint(data)
data = pandas.DataFrame.from_dict(data)
pprint.pprint(data)

indexer = recordlinkage.Index()
indexer.block("Category")
candidate_links = indexer.index(data)

print (len(data), len(candidate_links))