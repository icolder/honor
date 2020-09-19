import csv

# # CSV文件的读取
# # 方法一：
# with open("xxx.csv","r") as fp:
#     # reader是一个迭代器
#     reader = csv.reader(fp)
#     next(reader)  # 剔除第一行数据
#     for x in reader:
#         print(x)
#
#
# # 方法二：
# def read_csv():
#     with open("xxx.csv","r") as fp:
#         # 使用DictReader创建的reader对象 不会包含标题那一行的数据
#         # reader是一个迭代器，遍历这个迭代器，返回的是一个字典。
#         reader = csv.DictReader(fp)
#         for x in reader:
#             print(x["标题名字"])
#
# if __name__ == '__main__':
#     read_csv()

# csv文件的写入
# 方法一：
# headers = ["username", "age", "height"]
# values = [
#     ("张三", 18, 180),
#     ("李四", 19, 190),
#     ("王五", 20, 170)
# ]
#
# with open("classroom.csv", "w", encoding="utf-8", newline="") as fp:
#     writer = csv.writer(fp)
#     writer.writerow(headers)
#     writer.writerows(values)

# 方法二：
headers = ["username", "age", "height"]
values = [
    {"username":"张三", "age":18,"height":180},
    {"username":"李四", "height":170,"age":19},
    {"username":"王五", "age":20,"height":160}
]
with open("classroom.csv", "w", encoding="utf-8", newline="") as fp:
    writer = csv.DictWriter(fp,headers)  # 以字典的方式写入，即便values的顺序是乱的，它也会按照表头headers的格式写入
    writer.writeheader()  # 再次手动调用writerheaders才能真正将表头写入文件中，否则即便有上面那行代码也不会写入表头数据。
    writer.writerows(values)
