import requests
import re

def parse_page(url):
    headers = {
        'User-Agent': "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
    }
    response = requests.get(url, headers)
    text = response.text
    name = re.findall(r'<li\sclass="clearfix\stj-lawyer".*?<a\starget="\wblank".*?>(.*?)</a>',text,re.DOTALL)
    telephone = re.findall(r'<b\sclass="s-oe\sf16\sshowphone">(\d{11})</b>',text)
    address = re.findall(r'<p\sclass="mt10\ss-c666">(.*?)</p>',text)

    test = []
    for value in zip(name, telephone, address):
        name,telephone,address = value
        ret = {
            "name":name,
            "telephone":telephone,
            "address":address,
        }
        test.append(ret)
    # print(test)
    with open("num.txt",'a') as fp:
        fp.writelines(test)


def main():
    url = "https://www.66law.cn/wuhan/lawyer/page_2.aspx"
    for x in range(1,55):
        url = "https://www.66law.cn/wuhan/lawyer/page_%s.aspx" % x
        parse_page(url)

if __name__ == '__main__':
    main()