# #一：闭包：
# #如果在一个函数中，又定义了另外一个函数，并且，那个函数使用了外面这个函数的变量，并且外面那个函数返回了里面这个函数的引用，那么，里面这个函数就称为闭包。
# def greet(name):
#     def say():
#         print("hello %s" % name)
#     return say  #返回say这个函数 所以不能写成say()。
#
# ret = greet("zhiliao")
# ret()

# # 二：nonlocal关键字的使用：在闭包中改变外面函数的变量————同全局变量global类似
# def greet(name):
#     print("outter name is: %s" % name)
#     def inner():
#         nonlocal name # nolocal是闭包专用  不能换成global
#         name = name + " ketang"  # 闭包中使用的外部函数变量name变成一个新的变量供内部函数使用
#         print("inner name is: %s" % name)
#     return inner
#
# ret = greet("zhiliao")
# ret()

# # 三：装饰器
# 装饰器的使用是为了：
# 在不改变原函数以及原函数的调用的情况下扩展原函数的功能

def check_password(func):
    def inner():
        print("密码验证中……")
        func()
    return inner


'''
就相当于调用了check_password这个函数（装饰器），
把deposit（）这个函数当作check_password（func）的func参数传递进去了
'''
@check_password
def deposit():
    print("存款中……")
    
@check_password    
def withdrawal():
    print("取款在……")
    
button = 1
if button == 1:
    deposit()
    
else:
    withdrawal()  


# 1.被装饰的函数（比如def myprint）有返回值（用return返回结果）的时候
#   装饰器也需要用返回值（return）
# 2.被装饰的函数（比如def yourprint）有参数的时候，
#   装饰器中（inner）也需要带参数
# 3.inner(*args, **kwargs)宇宙无敌参数
#   有了(*args, **kwargs)这两个参数，装饰器就可以用于任意目标函数了

def cel(func):
    def inner(*args, **kwargs):
        print("我是新功能！")
        ret = func(*args, **kwargs)
        return ret
    return inner


@cel
def myprint(a):
    print(a)   # 无返回值 这里返回的是None


@cel
def yourprint(b):
    return b     # 有返回值 这里反回的是b的值（你好）


p = myprint("nihao")
b = yourprint("你好")

print(p)
print(b)
print(p, b)


# 给装饰器传递参数
# 双重语法糖：先执行最外层的语法糖（先@的谁先执行谁）

def get_celebrator(char):
    def cel(func):
        def inner(*args, **kwargs):
            print(char*15)
            func(*args, **kwargs)
        return inner
    return cel


@get_celebrator("=")
@get_celebrator("*")
def add(a):
    print(a)


add("你好，带参数的装饰器")


# wraps装饰器的用法
from functools import wraps

def get_celebrator(char):
    def cel(func):
        @wraps(func)  # 用wraps装饰器的原因是当调用cel.__name__时候不改变函数的名字
        def inner(*args, **kwargs):
            print(char*15)
            func(*args, **kwargs)
        return inner
    return cel


@get_celebrator("=")
@get_celebrator("*")
def add(a):
    print(a)


add("你好，带参数的装饰器")

print(add.__name__) # 如果没有@wraps装饰器，此处返回的函数名字将是cel，而不是add
