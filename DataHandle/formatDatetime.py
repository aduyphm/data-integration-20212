from pymongo import MongoClient
import pprint
import pandas
import recordlinkage
from recordlinkage.preprocessing import clean
from datetime import datetime
from pytz import timezone

client = MongoClient()
client = MongoClient('mongodb://localhost:27017/')
db = client['tich_hop']
collection = db['newspaper']

#
first_news = collection.find({})
field_names = []
error_list = []
error_id = []
id_list = []
time_list = []
for i in first_news:
    if type(i["release_time"]) == str:
        id_list.append(i["_id"])
        try:
            date_time_obj = datetime.strptime(i["release_time"], '%H:%M - %d/%m/%Y')
            print(date_time_obj)
            time_list.append(date_time_obj.astimezone(timezone('Asia/Bangkok')))
        except:
            try:
                date_time_obj = datetime.strptime(i["release_time"], '%d/%m/%Y %H:%M')
                print(date_time_obj)
                time_list.append(date_time_obj.astimezone(timezone('Asia/Bangkok')))
            except:
                try:
                    date_time_obj = datetime.strptime(i["release_time"], '%H:%M | %d/%m/%Y')
                    print(date_time_obj)
                    time_list.append(date_time_obj.astimezone(timezone('Asia/Bangkok')))
                except:
                    try:
                        date_time_obj = datetime.strptime(i["release_time"], '%H:%M %d/%m/%Y')
                        print(date_time_obj)
                        time_list.append(date_time_obj.astimezone(timezone('Asia/Bangkok')))
                    except:
                        try:
                            date_time_obj = datetime.strptime(i["release_time"], '%d/%m/%Y')
                            print(date_time_obj)
                            time_list.append(date_time_obj.astimezone(timezone('Asia/Bangkok')))
                        except:
                            error_list.append(i["release_time"])
                            error_id.append(i["_id"])
                            id_list.remove(i["_id"])

print(len(id_list))
print(len(time_list))
print(error_list)
for j in range(len(id_list)):
    collection.update_one({"_id": id_list[j]}, {"$set" :{"release_time" : time_list[j]}})

for j in range(len(error_id)):
    collection.delete_one({"_id" : error_id[j]})

