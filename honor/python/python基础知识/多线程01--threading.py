# 使用threading中的Thread实现多线程同步执行多个线程

import threading
import time

def coding():
    for x in range(3):
        print("正在写代码%s——%s" % (x, threading.current_thread()))  # threading.current_thread()查看当前线程的名字。
        time.sleep(1)

def drawing():
    for x in range(3):
        print("正在画图%s——%s" % (x, threading.current_thread()))
        time.sleep(1)


if __name__ == '__main__':
    t1 = threading.Thread(target=coding)
    t2 = threading.Thread(target=drawing)

    t1.start()
    t2.start()

# threading.current_thread()查看当前线程的名字。
# threading.enumerate() #  查看当前进程中有多少条线程
    print(threading.enumerate())
