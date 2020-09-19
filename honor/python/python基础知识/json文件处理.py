# # 注意，文件名不能为json.py否则会报错：module 'json' has no attribute 'dumps'
# # 在Python中，只有基本的数据类型才能转换成json格式的字符串。也即：int、float、str、list、dict、tuple

# 一：把数据转换成json字符串
# import json
#
# persons = [
#     {
#         "username": "zhiliao",
#         "age": 18,
#         "country": "china",
#     },
#     {
#         "username": "张三",
#         "age": 30,
#         "country": "中国",  # 如果文件中存储的有中文内容，在存储时候要制定utf-8的编码格式
#     }
# ]
# # json_str = json.dumps(persons)  # 转换为json文件格式，写入文件的话可以没有这一步操作
# # print(type(json_str))
# # print(json_str)
# with open("person.json", "w", encoding="utf-8") as fp:
#     json.dump(persons, fp, ensure_ascii=False)  # 存储中文时候把ascii码关闭掉


# 二：把接送字符串转换成Python对象

import json

with open("person.json", "r", encoding="utf-8") as fp:
    persons = json.load(fp)
    for x in persons:
        print(x)
