import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import jieba
from wordcloud import *
from collections import defaultdict
import imageio
import re

propFile=open('edit.prop')
texts=propFile.read()

# 加载冗余字库
stopwords = {}.fromkeys([ line.rstrip() for line in open('Stopword.txt') ])

dicts={}
matchFilename = re.match( r'filename=<(.*)>[.\n]title=<(.*)>[.\n]ignoreword=<(.*)>[.\n]background=<(.*)>[.\n]fontfile=<(.*)>', texts, re.M|re.DOTALL)

if matchFilename:
    dicts={'fn':matchFilename.group(1),'tt':matchFilename.group(2),'ignw':matchFilename.group(3),'bg':matchFilename.group(4)}
else:
    print("No matchFilename!!")

filename=dicts['fn']

data=pd.read_excel(dicts['fn'],encoding='utf-8',dtype=str)

ignw=dicts['ignw']
ignore_word=ignw.split(",")
tt=dicts['tt']
titleItems=data[tt]
bg=dicts['bg']

#读入背景图片
back_coloring = imageio.imread(bg)
wc1d = WordCloud(font_path="fonts/STFANGSO.TTF",background_color="white", #背景颜色  
                max_words=100,# 词云显示的最大词数  
                mask=back_coloring,#设置背景图片  
                max_font_size=100, random_state=42,width=500, height=300, margin=2
)

## 结巴分词
dat_fc = []

data_test = list(titleItems)

for i in data_test:
    ct_w=jieba.cut(i)
    ct_l=list(ct_w)

    dat_fc.append(ct_l)

frequentWord =defaultdict(int)
for i in dat_fc:
    for j in i:
        if(j not in ignore_word) and (j not in stopwords):
            frequentWord[j] += i.count(j)
keys=list(frequentWord.keys())
for k in keys:  
    if frequentWord[k]<3:
        frequentWord.pop(k)

# //根据词频生成词云
my_wordcloud =wc1d.generate_from_frequencies(frequentWord)
#背景图片
image_colors = ImageColorGenerator(back_coloring)
#图片尺寸
my_wordcloud.recolor(color_func=image_colors).to_file('wordCloud.png')

