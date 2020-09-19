# # 1. 函数式编程 filter的用法
# # filter是用于过滤掉不符合条件的数据的
# # filter(function, iterable)
# # filter接受一个函数(function)和一个可迭代对象(iterable)，
# # 将函数作用于iterable的每一个元素，然后根据返回值是True还是False决定保留还是丢弃该元素,
#
# a = [1, 2, 3, 4, 5, 6]
# b = filter(lambda x: x > 3, a)  # 符合x>3的数则返回True，则保留
# print(list(b))  # filter返回的是被保留的数值，需要用list重新定义成列表

# 或者
# a = [1, 2, 3, 4, 5, 6]
# def  is_odd(n):
#     return n > 3
#
# print(list(filter(is_odd, a)))

# 2. map函数：
# map()函数的输入是一个函数function以及一个或多个可迭代的集合iterable
# Python 3.x中输出的是一个迭代器。
# map()函数主要功能为对iterable中的每个元素都进行function函数操作，并将所有的返回结果放到集合或迭代器中。
# function如果是None，则其作用等同于zip()。
# a = [1, 2, 3, 4, 5, 6]
# b = map(lambda x: x*10, a)
# print(list(b))
# # 或者
# a = map(lambda x, y : x * y, range(3), range(3))
# b = list(a)
# print(b)

# 3. reduce函数：
#  reduce()函数的输入是一个函数function、一个可迭代的集合iterable以及一个可选的初始项initializer，输出为一个值。
#  不同于map()函数对序列中的元素进行逐一遍历
#  reduce()函数对序列中的元素进行递归计算
#  在 Python3 中，被放置在 functools模块里，如果想要使用它，则需要通过引入 functools 模块来调用 reduce() 函数
from functools import reduce

a = [1, 2, 3, 4, 5, 6]
b = reduce(lambda x, y: x + y, a)
print(b)
