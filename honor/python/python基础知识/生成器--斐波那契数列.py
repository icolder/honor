# 斐波那契数列
# 用普通函数的方式实现斐波那契数列

def fib(count):
    index = 0
    a, b = 0, 1
  
    while index < count:
        print(b)
        c = b
        b = a + b
        a = c
        index += 1
        
fib(7)



# 用生成器的方式实现斐波那契数列

def fib(count):
    index = 0
    a, b = 0, 1
    while index < count:
        yield b
        c = b
        b = a + b
        a = c
        index += 1
        
for i in fib(7):
    print(i)

