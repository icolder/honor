# row 代表乘法表中的每一行
# column 代表乘法表中的每一列

row = 1
column = 1

while column <= 9:
    #乘法表中每一行中的数据都是小于等于列数
    while row <= column:
        # (\t)制表符，为了让输出的结果整齐排布
        print("%s * %s = %s" %(row, column, column*row), end=" \t")
        row += 1
    column += 1
    row = 1
    print("")