import re

# 1.匹配某个字符串
# text = "hello"
# # match 只能从text开始的位置进行匹配，开始位置没有的话就会报错。
# ret = re.match('he',text)
# print(ret.group())

# 2.(.)匹配任意的字符,只能匹配一个字符,且不能匹配换行符（\n）
# text = "hello"
# ret = re.match('.',text) # 如果要匹配text中的换行符的话，需要在此处text后面添加一个参数（re.DOTALL）
# print(ret.group())

# 3.(\d)匹配任意的数字（0-9）
# text = "1hello"
# ret = re.match('\d',text)
# print(ret.group())

# 4.(\D)匹配任意非数字
# text = "hello"
# ret = re.match('\D',text)
# print(ret.group())

# 5.(\s)匹配空白字符（\n， \t， \r， 空格）
# text = "\nhello"
# ret = re.match('\s',text)
# print(ret.group())

# 6.(\w)匹配（a-z，A-Z，0-9，_）
# text = "_hello"
# ret = re.match('\w',text)
# print(ret.group())

# 7.(\W)匹配的和\w相反
# text = "+hello"
# ret = re.match('\W',text)
# print(ret.group())

# 8.([])组合的方式，只要满足中括号中的字符就可以匹配
# text = "-1a1hello"
# ret = re.match('[a1-]',text) #开始的位置是中括号中的任意字符就可以匹配
# print(ret.group())

# 9.(^)脱字号，匹配非xx字符
#             还表示以…开始
# \d = [0-9]
# \D = [^0-9]
# \w = [a-zA-Z0-9_]
# \W = [^a-zA-Z0-9_]
# text = "heool"
# ret = re.match('^h',text)
# print(ret.group())

# 10.(*)星号可以匹配0个或者任意多个字符（匹配有或者没有），它需要跟其他字符匹配方式结合使用
# text = "a123e"
# ret = re.match('\d*',text)
# print(ret.group())

# 11.（+）加号匹配1个或者多个字符，它需要跟其他字符匹配方式结合使用
# text = "124lo"
# ret = re.match('\d+',text)
# print(ret.group())

# 12.(?)问号匹配0个或者一个
# text = "hello"
# ret = re.match('\w?',text) #只能匹配单个或者没有字符
# print(ret.group())

# 13.（{m}）花括号里面的数字m代表只能匹配的字符个数
# text = "hello"
# ret = re.match('\w{3}',text) #虽然有5个英文字母，但只能匹配限制的个数（3）个
# print(ret.group())

# 14.（{m,n}）花括号区间限制，匹配m—n个字符，最少匹配m个，最多匹配n个
# text = "hello"
# ret = re.match('\w{2,4}',text)
# print(ret.group())

# ####  正则表达式实战小案例  ######

# 验证手机号码
# text = "13345678910"
# ret = re.match('1[34578]\d{9}',text) # 手机号第一位必须是1，第二位可以是34578中的任意数，剩下数字还有9位
# print(ret.group())

# 验证邮箱号码
# text = "x-x_x+1asw@163.com"
# ret = re.match('.+@[a-z0-9]+\.[a-z]+',text)
# print(ret.group())

# url验证
# text = "http://localhost:8888/tree"
# ret = re.match('(http|https|ftp):.+',text) #竖线(|)表示或者，用小括号括起来
# print(ret.group())

# 身份证
# text = "34234518970907456x"
# ret = re.match('\d{17}[\dxX]',text) #竖线(|)表示或者，用小括号括起来
# print(ret.group())

# 15.($)以…结尾
# text = "124lom"
# ret = re.match('.+m$',text) #必须是以m结尾，$符号在m的后面
# print(ret.group())

# 16.(?)贪婪模式和非贪婪模式
# text = "<h1>标题</h1>"
# ret = re.match('<.1>?',text)
# print(ret.group())

# 匹配0-100之间的数字
# 不可以出现01-09，101…
# text = "100"
# ret = re.match('[1-9]\d?$|100$',text)
# print(ret.group())

# (\)转义字符
# (r"")原生字符串
# re.match和re.search的区别：
# # match只能从开始位置开始匹配，
# # search可以从任意位置开始匹配，只要字符串里有符合要求的字符就可以匹配出来

# 分组
# text = "apple price is $99,orange price is $10"
# ret = re.search('.*(\$\d+).*(\$\d+)',text)
# print(ret.group())
# print(ret.group(0))
# print(ret.group(1))
# print(ret.group(1,2))
# print(ret.groups())

# findall 函数
# text = "apple price is $99,orange price is $10"
# ret = re.findall('\$\d+',text)
# print(ret) #使用findall打印的时候就不需要group()了

# sub 函数
# text = "apple price is $99,orange price is $10"
# ret = re.sub('\$\d+',"0",text)  #sub函数有4个参数（满足条件的规则，将要替换成的字符串，需要替换的个数默认全部替换，文本）
# print(ret) # sub也不需要group()

# split 函数
# text = "apple price is $99&orange price is $10"
# ret = re.split('[^a-zA-Z0-9]',text)
# print(ret)

# compile 函数
# text = "apple price is $99,orange price is $10"
# r = re.compile('.*(\$\d+).*(\$\d+)')
# ret = re.search(r,text)
# print(ret.groups())

# VERBOSE 函数 中间可以添加注释
# text = "apple price is $99,orange price is $10"
# r = re.compile('''
#     .* #数字前的所有字符
#     (\$\d+) #数字
#     .* #数字中间的字符
#     (\$\d+) #数字
# ''',re.VERBOSE)
# ret = re.search(r,text)
# print(ret.groups())