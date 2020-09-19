# from collections.abc import Iterable, Iterator
# # 判断一个对象是不是可迭代的对象，使用isinstance方法
# ret = "123"
# ret1 = [1,2,3]
# ret3 = (1,2,3)
# ret4 = 123
# print(isinstance(ret, Iterable))



# #可迭代对象（在一个类中实现了__iter__方法）
# class Myrange():
#     def __iter__(self):
#         pass
#
# ret = Myrange()
#
# print(isinstance(ret, Iterable))

# #迭代器（在一个类中实现了__next__方法和__iter__方法）
# class Myrange():
#     def __iter__(self):
#         pass
#
#     def __next__(self):
#         pass
#
# ret = Myrange()
#
# print(isinstance(ret, Iterator))



# #自定义一个可迭代对象（能用for循环遍历的类）
class MyrangeIterator(object):
    def __init__(self, start, end):
        self.index = start
        self.end = end

    def __iter__(self):
        return self

    def __next__(self):
        if self.index < self.end:
            temp = self.index
            self.index += 1
            return temp
        else:
            raise StopIteration()


class Myrange():
# Myrange 是可迭代对象
    def __init__(self, start, end):
        self.start = start
        self.end = end

    def __iter__(self):
        # （在可迭代对象类中用）__iter__方法要返回一个迭代器对象
        return MyrangeIterator(self.start, self.end)


# for …… in…… 的原理
ret = Myrange(1, 10)
for x in ret:
    print(x)

# while 循环原理
# ret = Myrange(1,10)
# ret_iterator = iter(ret)
# while True:
#     try:
#         x = ret_iterator.__next__()
#         print(x)
#     except StopIteration:
#         break
