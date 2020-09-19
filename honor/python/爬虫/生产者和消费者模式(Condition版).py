# Condition 版本的生产者-消费者模式

from threading import Thread, Lock, Condition, current_thread
import random
import time

gCondition = Condition()
gMoney = 1000  # 初始时候有1000元钱
totalTimes = 10
gTime = 1


class Producer(Thread):
    def run(self):
        global gMoney
        global gTime
        while True:
            gCondition.acquire()
            if gTime > 10:
                gCondition.release()
                break
            else:
                money = random.randint(100, 1000)
                gMoney += money
                gTime += 1
                print("%s生产了%s元钱，剩余%s元钱。" % (current_thread, money, gMoney))
                gCondition.notify_all()
                gCondition.release()
                time.sleep(1)


class Consumer(Thread):
    def run(self):
        global gMoney
        global gTime
        while True:
            money = random.randint(100, 1000)
            gCondition.acquire()
            while gMoney < money:
                if gTime > totalTimes:
                    gCondition.release()
                    return
                print("%s准备消费%s元钱，剩余%s元钱，不足！" % (current_thread, money, gMoney))
                gCondition.wait()
            gMoney -= money
            print("%s消费了%s元钱，剩余了%s元钱" % (current_thread, money, gMoney))
            gCondition.release()
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
