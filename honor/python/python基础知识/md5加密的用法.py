import hashlib

# 方法一：
# ret = "您好啊大哥"
# num = hashlib.md5(ret.encode(encoding="utf-8")).hexdigest()
# print(num)

# 方法二：
# ret = "您好啊大哥"
# m = hashlib.md5()
# m.update(ret.encode(encoding="utf-8"))
# print(m.hexdigest())

# 方法三：
# def md5(ret):
#     m = hashlib.md5(ret.encode(encoding="utf-8")).hexdigest()
#     return m
# a = md5("您好啊大哥")
# print(a)

# 方法四：
# def md(s):
#     m = hashlib.md5()
#     m.update(s.encode(encoding="utf-8"))
#     text = m.hexdigest()
#     return text
#
# a = md("您好啊大哥")
# print(a)

# 五.对字典中的值md5加密
sign = {
    "tel":"12345678910",
    "address":"山东济南高新区",
        }
def md(s):
    m = hashlib.md5()
    m.update(s.encode(encoding="utf-8"))
    return m.hexdigest()

def mdfive():
    for k,v in sign.items():
        print(k,"->",md(v))

if __name__ == '__main__':
    mdfive()