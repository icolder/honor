import threading
import time


class CodingThread(threading.Thread):  # 让这个类直接继承自threading.Thread
    def run(self):  # 必须定义一个run方法。才能在调用该线程的时候自动的去执行它
        for x in range(3):
            print("正在写代码%s——%s" % (x, threading.current_thread()))
            time.sleep(1)


class DrawingThread(threading.Thread):
    def run(self):
        for x in range(3):
            print("正在画图%s——%s" % (x, threading.current_thread()))
            time.sleep(1)

if __name__ == '__main__':
    t1 = CodingThread()   # 直接采用初始化一个类对象的方式执行这个类下面的线程
    t2 = DrawingThread()

    t1.start()
    t2.start()