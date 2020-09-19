# 在主进程中创建多个子进程的时候，是把主进程中所欲代码 变量 函数 类 等都复制一份给到子进程，所以在子进程中执行的时候不会改变主进程的变量。
# 但是消息队列Queue 可以实现进程间通信，实现函数 变量等公用的目的
# 这是使用Process进程的方式实现进程间通信，如果要使用进程池（Pool）做进程间通信，则要使用Manager函数

# # 方式一：给Process做进程间通信，直接使用"Queue()"就可以了
# from multiprocessing import Queue, Process
#
# q = Queue(3)  # 全局变量
#
# def write(q):
#     for x in ["m1","m2","m3"]:  # 在子进程中改变了全局变量
#         q.put(x)
#         print("子进程%s存放进去了" % x)
#
# def read(q):
#     while True:
#         try:
#             msq = q.get(block= False)  # 在另外一个子进程中使用被改变过的全局变量
#             print("子进程%s读出来了" % msq)
#         except:
#             print("消息都读取出来了")
#             break   # 所有消息执行完成后退出程序
#
# if __name__ == '__main__':
#     q = Queue()
#     pw = Process(target=write, args=(q,))
#     pr = Process(target=read, args=(q,))
#
#     pw.start()
#     pr.start()
#
#     pw.join()  # 此处作用：等到pw执行完成之后再去执行pr的代码


# 方式二：给进程池（Pool）做进程间通信，应该使用"multiprocessing.Manager().Queue()"
from multiprocessing import Queue, Pool,  Manager  # 多导入了一个Manager

q = Queue(3)  # 全局变量

def write(q):
    for x in ["m1","m2","m3"]:  # 在子进程中改变了全局变量
        q.put(x)
        print("子进程%s存放进去了" % x)

def read(q):
    while True:
        try:
            msq = q.get(block= False)  # 在另外一个子进程中使用被改变过的全局变量
            print("子进程%s读出来了" % msq)
        except:
            print("消息都读取出来了")
            break   # 所有消息执行完成后退出程序

if __name__ == '__main__':
    q = Manager().Queue()  # 区别是多了一个Manager（）
    pool = Pool(2)  #  最多有两个进程池
    pool.apply(func=write, args=(q,))   # 使用apply而不用apply_async是先执行完这个子进程再执行下一个子进程
    pool.apply(func=read, args=(q,))

    pool.close()  # 进程池执行完毕后要代码手动关闭

    pool.join()
