import pandas
from recordlinkage.preprocessing import clean
d = {'col1': ['marry - a', 'kudo::'], 'col2': ['nam vinh', 'okee-']}

df = pandas.DataFrame(data=d)
s = pandas.Series(df['col1'])
df['col1'] = clean(s)
print(df)
df['col1'][0] = "b"
print(df) 