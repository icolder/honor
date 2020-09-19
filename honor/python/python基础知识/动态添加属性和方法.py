# # 一：动态添加属性：
# class Person(object):
#     def __init__(self, name):
#         self.name = name
#
#
# p = Person("zhiliao")
# setattr(p, "age", 34)  # setattr(对象，属性名，属性对应的值)
# print(p.age)
#
# if hasattr(p, "name"):  # 判断对象是否有某个属性
#     print("yes")
# else:
#     print("no")


# # 二：动态添加方法：
# import types
#
#
# class Person(object):
#     def __init__(self, name):
#         self.name = name
#
#
# p1 = Person("zhiliao")
# p2 = Person("dongfeng")
#
#
# def run(self):
#     print("%s在奔跑！" % self.name)
#
#
# p1.run = types.MethodType(run, p1)
# p1.run()
#
# p2.run = types.MethodType(run, p1)  # 此处p1  执行代码之后跟上面那两行代码执行结果是一样的
# p2.run()

# # 三：动态删除属性
# class Person(object):
#     def __init__(self, name):
#         self.name = name
#
#
# p1 = Person("zhiliao")
# print(p1.name)
#
# # 1.用del的方法删除属性
# del p1.name   # 把p1的name属性删除掉了
# print(p1.name)  # 执行这行代码会报错
#
# # 2.用delattr的方法删除属性
# delattr(p1, "name")  # 把p1的name属性删除掉了
# print(p1.name)  # 执行这行代码会报错


# 四：__slots__魔术变量：在新式类中才起作用
class Person(object):
    __slots__ = ("name", "age") # 只能给Person这个类添加name和age属性，再添加其他属性就会报错
    def __init__(self, name):
        self.name = name


p1 = Person("zhiliao")
print(p1.name)

p1.age = 18
print(p1.age)

p1.country = "china" # country这个属性不在__slots__规定的元组里，所以执行代码会报错
print(p1.country)