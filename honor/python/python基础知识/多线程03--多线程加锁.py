#  线程锁  只用于修改了全局变量的地方，如果只是访问全局变量，则不需要加锁

import threading

VALUE = 0
gLock = threading.Lock()  # 初始化一个多线程的锁

def add_value():
    global VALUE
    gLock.acquire()  # 在执行具体操作之前上锁，确保一个线程在执行代码的时候另一个线程不会进来
    for x in range(100000):
        VALUE += 1
    gLock.release() # 解锁，线程执行完操作之后解锁，确定另外的线程可以进入代码执行操作
    print(VALUE)


if __name__ == '__main__':
    for i in range(3):
        t = threading.Thread(target=add_value())
        t.start()
