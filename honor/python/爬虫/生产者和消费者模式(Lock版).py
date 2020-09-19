# Lock 版本的生产者-消费者模式

from threading import Thread, Lock, current_thread
import random
import time

gLock = Lock()
gMoney = 1000  # 初始时候有1000元钱
totalTimes = 10
gTime = 1


class Producer(Thread):
    def run(self):
        global gMoney
        global gTime
        while True:
            gLock.acquire()
            if gTime > 10:
                gLock.release()
                break
            else:
                money = random.randint(100, 1000)
                gMoney += money
                gTime += 1
                print("%s生产了%s元钱，剩余%s元钱。" % (current_thread, money, gMoney))
                gLock.release()
                time.sleep(1)


class Consumer(Thread):
    def run(self):
        global gMoney
        global gTime
        while True:
            money = random.randint(100, 1000)
            gLock.acquire()
            if gMoney >= money:
                gMoney -= money
                print("%s消费%s元钱，剩余%s元钱。" % (current_thread, money, gMoney))
                gLock.release()
            else:
                if gTime > 10:
                    gLock.release()
                    break
                else:
                    re_money = money - gMoney
                    print("%s想要消费%s元钱，但总金额只剩余%s元钱，还差%s元钱。" % (current_thread, money, gMoney, re_money))
                    gLock.release()
                time.sleep(1)


def main():
    for x in range(3):
        producer = Producer()
        producer.start()

    for x in range(5):
        consumer = Consumer()
        consumer.start()


if __name__ == '__main__':
    main()
