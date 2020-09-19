from django.http import HttpResponse, JsonResponse
import json
from django.shortcuts import render
from .models import Book, Category, Article, Tags
from django.utils.timezone import now, localtime
from front.models import FrontUser
from datetime import datetime, date
from django.utils.timezone import localtime, make_aware
from django.db.models import Avg, Count, Max, Min, Sum, F, Q
from django.views.decorators.http import require_http_methods
from django.views.generic import View, ListView
from django.utils.decorators import method_decorator


@require_http_methods(['POST', 'GET'])
def index(request):
    # article = Article(title='abc', content='12345')
    # category = Category(name='西游记')
    # category.save()
    # front_author = FrontUser(username="吴承恩")
    # front_author.save()
    # article.category = category
    # article.author = front_author
    # article.save()
    # category.save()
    # article.category = category
    # article.save()
    # article = Article.objects.get(pk=2)
    # name = article.category.name
    # author = article.author.username
    # category = Category.objects.filter(name='不知道').first()
    # category.delete()

    # category = Category.objects.filter(name='默认分类').first()
    # articles = category.articles.all()
    # article = Article(title="测试", content="就是为了测试")
    # category = Category.objects.get(pk=4)
    # category.articles.add(article, bulk=False)
    # return render(request, 'index.html')
    # articles = Article.objects.filter(title__in=['你', '1我', '2他'])
    # for article in articles:
    #     print(article)

    # category = Category.objects.filter(article__id__in=[2,4,7])
    # for i in category:
    #     print(i)
    # start_time = make_aware(datetime(year=2019, month=9, day=6, hour=10, minute=30, second=0))
    # end_time = make_aware(datetime(year=2019, month=9, day=6, hour=11, minute=30, second=0))
    # books = Book.objects.filter(create_time__date=date(year=2019, month=9, day=6))
    # books = Book.objects.filter(removed__isnull=True)
    # return render(request, 'index.html', context={"books":books})
    # books = Book.objects.order_by('sell_price', '-create_time')
    # books = Book.objects.values('id','name','price')
    # for book in books:
    #     print(book)
    # articles = Article.objects.select_related('category')
    # for article in articles:
    #     print("%s==%s" % (article.title, article.category.name))
    # books = Book.objects.defer('author')
    # for book in books:
    #     print("%s==%s==%s" % (book.id, book.name, book.price))
    # book = Book.objects.get_or_create(name='大傻子', author='小傻子', price=10.1, sell_price=9.9, removed=0)
    # print(book)
    # book = Book.objects.count()
    count = Book.objects.filter(author__startswith='小').count()
    # for book in books:
    #     print(book)
    # book = Book.objects.get(pk=13)
    print(count)
    return render(request, 'index.html')


def many_to_many_view(request):
    # tag = Tags(name="今日文章")
    # tag.save()
    # article = Article.objects.filter(title='你').first()
    # article.tags_set.add(tag)
    # article = Article.objects.filter(title='你').first()
    # article.delete()
    tag = Tags.objects.filter(name='热门文章').all()
    tag.delete()
    return render(request, 'many_to_many.html')


# @require_http_methods(['POST', 'GET'])
# def add_article_view(request):
#     if request.method == 'GET':
#         return render(request, 'add_article.html')
#     else:
#         title = request.POST.get("title")
#         content = request.POST.get("content")
#         category = Category.objects.get(pk=4)
#         Article.objects.create(title=title, content=content, category=category)
#         return render(request, 'add_article.html')


class AddArticleView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'add_article.html')

    def post(self, request, *args, **kwargs):
        title = request.POST.get("title")
        content = request.POST.get("content")
        category = Category.objects.get(pk=4)
        file = request.FILES.get('myfile')
        Article.objects.create(title=title, content=content, category=category, thumbnail=file)
        return render(request, 'add_article.html')




def jsonresponse_view(request):
    persons = [
        {
            'username': 'zhiliao',
            'age': 18,
            'address': 'linyi'
        },
        {
            'username': 'ketang',
            'age': 18,
            'address': 'China'
        }
    ]
    # response = JsonResponse(persons, safe=False)
    return JsonResponse(persons, safe=False)


class ArticleListView(ListView):
    model = Book
    template_name = 'article_list.html'
    context_object_name = 'articles'
    paginate_by = 10
    ordering = '-create_time'


    # def get_queryset(self):
    #     return Book.objects.exclude(author='白岩松')

    def get_context_data(self, **kwargs):
        context = super(ArticleListView, self).get_context_data(**kwargs)
