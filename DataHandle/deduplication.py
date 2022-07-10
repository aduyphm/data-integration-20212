from pymongo import MongoClient
import pprint
import pandas
import recordlinkage
from recordlinkage.preprocessing import clean


client = MongoClient()
client = MongoClient('mongodb://localhost:27017')
db = client['tich_hop']
collection = db['newspaper']

i = 0
first_news = collection.find_one()
data = {}
for i in first_news.keys():
    data[i] = []

j = 0
for post in collection.find():
    if len(post.keys()) < 8:
        print(post)
    for i in post.keys():
        data[i].append(post[i])
        
# pprint.pprint(data)
# for i in post.keys():
#     print(len(data[i]))
# print(len(data['Sapo']))
data = pandas.DataFrame.from_dict(data)
pprint.pprint(data)
# prepocessing
s = pandas.Series(data['tittle'])
data['tittle'] = clean(s)

# index
indexer = recordlinkage.Index()
indexer.block("category")
candidate_links = indexer.index(data)

compare_cl = recordlinkage.Compare()
compare_cl.string("tittle", "tittle", method="levenshtein", threshold=0.85, label="tittle")

features = compare_cl.compute(candidate_links, data)
matches = features[features.sum(axis=1) > 0]
# matches = matches.head()
# print(matches)
delete_data = data.iloc[matches.index.unique(1)]['_id']
delete_data = delete_data.reset_index() 
# print(delete_data)
for index, row in delete_data.iterrows():
    query = { "_id" : row[1]}
    gets = collection.find_one(query)
    # print(gets["tittle"])
    collection.delete_one(query)
