# WordCloud

### - 可以对excel文件中的词语进行词云生成

运行文件：**main.py** 或 用jupyter notebook 打开 **wordCloudScripy.ipynb**

（linux平台有字体问题，需要下载字体，在fonts目录下已经下载）

##edit.prop,为配置文件：
```
1.分析词云的文件，默认为根目录，可以输入子目录格式：
filename=<data.txt>
2.选择词云生成的目标栏
title=<Country>
3.希望过滤的字词汇
ignoreword=<社会,保障局,中国,中心>
4.词云背景图片
background=<love.jpg>
5.词云字体
fontfile=<STFANGSO.TTF>
6.词云背景颜色
background_color=<white>
7.最多显示的词数量
max_words=<200>
8.词语出现的频率，低于多少不考虑显示
ignor_blow_num=<1>
9.图片宽
picture_width=<500>
10.图片高
picture_height=<300>
```
## 效果如下:
### 2013届大学毕业生走向数据xls
![image](https://raw.githubusercontent.com/425776024/quick_word_cloud/master/show.png)
<br/>

### 参考(Reference)
- https://github.com/KimMeen/Weibo-Analyst
- _Weibo-Analyst_: https://github.com/KimMeen/Weibo-Analyst
