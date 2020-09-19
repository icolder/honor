from django.shortcuts import render
from django.http import HttpResponse
from .models import Book, Publisher, Tag
from django.utils.timezone import now, localtime, make_aware
from datetime import datetime
from django.db.models import Avg, Count, Max, Min, F
from django.views.decorators.http import require_http_methods

def index(request):
    # 添加一条数据到数据库（book）中
    # book = Book(name='三国演义', author='罗贯中', price=49)
    # book = Book(name='西游记', author='吴承恩', price=47)
    # book.save()
    # 1.根据主键进行查找，pk就是primary_key的缩写
    # book = Book.objects.get(pk=1)
    # print(book)
    # 2.根据其他条件进行查找,返回一个QuerySet对象（列表）.用first()方法返回第一条数据
    # books = Book.objects.filter(name='西游记').first()
    # print(books)

    # 删除数据
    # book = Book.objects.filter(name='三国演义')
    # book.delete()

    # 修改数据
    # book = Book.objects.filter(name='西游记').first()
    # book.price = 53
    # book.save()
    # book = Book(name='红楼梦', author='曹雪芹', price=37)
    # book.save()
    # book = Book.objects.filter(name='水浒传').first()
    # book.author = '施耐庵'
    # book.save()
    # book = Book.objects.get(pk=4)
    # create_time = book.creat_time
    # print(create_time)
    # print('='*30)
    # print(localtime(create_time))

    # 外键级联操作
    book = Book(name='相逢', author='张小娴', price=36.9)
    book.save()
    # publisher = Publisher(name='湖南文艺出版社', address='山东济南')
    # publisher.book = book
    # publisher.save()
    # publisher = Publisher.objects.filter(name='湖南文艺出版社').first()
    # print(publisher.book.name)
    # book = Book.objects.filter(author='大冰').first()
    # publisher = book.publisher_set.first()
    # print(publisher)
    # article = Book.objects.filter(name__iexact='坏')
    # articles = Book.objects.filter(name__in=['西游记', '水浒传', '你坏'])
    # books = Book.objects.filter(tag__name__in=['热门书籍'])
    # for book in books:
    #     print(book)
    # print(books.query)
    tags = Tag.objects.filter(books__name__in=['你坏'])
    for tag in tags:
        print(tag)
    return HttpResponse('数据添加成功')
    # return render(request, 'index.html', context={'create_time': create_time})


def many_to_many_view(request):
    book = Book.objects.filter(author='大冰').first()
    tag = Tag(name='野生作家')
    tag.save()
    book.tag_set.add(tag)

    return HttpResponse("标签添加成功")

def index2(request):
    start_time = make_aware(datetime(year=2019, month=7, day=22, hour=20, minute=30))
    end_time = make_aware(datetime(year=2019, month=7, day=22, hour=21, minute=30))
    books = Book.objects.filter(creat_time__range=(start_time, end_time))
    for book in books:
        print(book)
    print(books.query)

    return HttpResponse('查询成功')


def index3(request):
    # 查询__date/ __time /__year / __month 时候，要先给mysql添加时区文件，下载路径如下：
    # http://dev.mysql.com/downloads/timezones.html
    books = Book.objects.filter(creat_time__date=datetime(year=2019, month=7, day=22))
    for book in books:
        print("%s--%s" % (book.name, book.price))
    print(books)
    return HttpResponse('查询成功了')


def index4(request):
    result = Book.objects.aggregate(avg=Avg('price'))
    print(result)
    # for key,value in result.items():
    #     print(value)
    print(round(result['avg'], 1))  # round()会按照四舍五入的方法将浮点数保留相应的小数位数

    return HttpResponse('计算出来了')


def index5(request):
    count = Book.objects.aggregate(count=Count('price', distinct=True))
    print(count['count'])
    return HttpResponse('OK')


def index6(request):
    result = Book.objects.aggregate(book_min=Min('price'), book_max=Max('price'))
    print(result)
    return HttpResponse('好了')

# F 表达式
def index7(request):
    # Book.objects.update(price=F('price')+5)
    results = Book.objects.filter(name=F('author'))
    for result in results:
        print("%s--%s" % (result.name, result.author))
    return HttpResponse('更新成功')


def index8(request):
    results = Book.objects.annotate(book_publisher=F('publisher__name'))
    for result in results:
        print("%s--%s" % (result.name, result.book_publisher))

    return HttpResponse("OK")

def index9(request):
    order_by = Book.objects.order_by('-creat_time')
    for i in order_by:
        print(i)
    return HttpResponse('Ok')


def index10(request):
    books = Book.objects.values('name','id')
    for book in books:
        bk = book.get('name')
        print(bk)
    return HttpResponse('OK')


def index11(request):
    results = Publisher.objects.select_related('book')
    for result in results:
        print("%s--%s--%s" % (result.name, result.book.name, result.book.price))

    return HttpResponse("OK")


def index12(request):
    # book = Book.objects.get(pk=2)
    # print(book)
    # Book.objects.create(name='痛并快乐着', author='白岩松', price=38)
    # result = Book.objects.get_or_create(author='大冰')
    # print(result)
    # if Book.objects.filter(name='你坏').exists():
    #     print('这本书已经存在了！')
    # else:
    #     print('不存在')
    books = Book.objects.filter(price__gte=30).distinct()
    for book in books:
        print(book)
    return HttpResponse("ok")


def index13(request):
    books = Book.objects.values('name')
    return render(request, 'index.html', context={'books': books})