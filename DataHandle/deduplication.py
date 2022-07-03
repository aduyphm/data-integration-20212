from pymongo import MongoClient
import pprint
import pandas
import recordlinkage
from recordlinkage.preprocessing import clean


client = MongoClient()
client = MongoClient('mongodb+srv://kudo313:kudo_321@cluster1.mza5o.mongodb.net/admin?authSource=admin&replicaSet=atlas-p2oirl-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true')
db = client['tich_hop']
collection = db['newspaper']

i = 0
first_news = collection.find_one()
data = {}
for i in first_news.keys():
    data[i] = []

j = 0
for post in collection.find():
    for i in post.keys():
        data[i].append(post[i])
    j += 1
    if j > 5:
        break
pprint.pprint(data)
data = pandas.DataFrame.from_dict(data)
pprint.pprint(data)
# prepocessing
s = pandas.Series(data['Tittle'])
data['Tittle'] = clean(s)

# index
indexer = recordlinkage.Index()
indexer.block("Category")
candidate_links = indexer.index(data)

compare_cl = recordlinkage.Compare()
compare_cl.string("Tittle", "Tittle", method="jarowinkler", threshold=0.85, label="Tittle")

features = compare_cl.compute(candidate_links, data)
matches = features[features.sum(axis=1) > 0]
delete_data = data.iloc[matches.index.unique(1)]['_id']
delete_data = delete_data.reset_index() 
for index, row in delete_data.iterrows():
    query = { "_id" : row[1]}
    collection.delete_one(query)