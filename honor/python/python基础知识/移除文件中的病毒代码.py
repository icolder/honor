# 把一个文件中的病毒代码去除掉
# 文件内容如下：
'''
hello
the
<p1>
ashdifos
shiog
niaofh
<\p1>
world
'''

a = []
with open("xxx.txt", "r") as fp:
    is_virus = False
    for line in fp:
        if line.startswith("<p1>"):
            is_virus = True
        elif line.startswith("<\p1>"):   # 如果此处用的是endswith:则会把(<\p1>)后面的那行代码也删除掉了
            is_virus = False
        else:
            if not is_virus:
                a.append(line)

with open("xxx.txt", "w") as fp:
    fp.writelines(a)