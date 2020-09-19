# 猜数字小游戏
value = 67
input_value = int(input("请输入一个数字："))

while input_value != value:
    if input_value < value:
        print("小了")
    elif input_value > value:
        print("大了")
    input_value = int(input("请重新输入一个数字："))

print("恭喜您，猜对了！")
