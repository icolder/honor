from django.db import models


class Book(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, null=False)
    author = models.CharField(max_length=100, null=False)
    price = models.FloatField(null=False, default=0)
    sell_price = models.FloatField(null=False, default=0, db_column='s_price')
    removed = models.BooleanField(null=True)
    create_time = models.DateTimeField(auto_now_add=True)
    # telephone = models.CharField(max_length=11,unique=True, null=True)

    class Meta:
        db_table = 'author(book)'
        # ordering = ['-price','-create_time']

    def __str__(self):
        return "Book name:{name},author:{author},price:{price},sell_price:{sell_price},创建时间：{create_time}".format(name=self.name,author=self.author, price=self.price, sell_price=self.sell_price, create_time=self.create_time)


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return "分类名称：%s" % self.name


def default_del():
    return Category.objects.get(pk=4)


class Tags(models.Model):
    name = models.CharField(max_length=100)
    articles = models.ManyToManyField('Article')


class Article(models.Model):
    title = models.CharField(verbose_name='标题', max_length=100)
    content = models.TextField()
    category = models.ForeignKey("Category", on_delete=models.SET(default_del), null=True)
    author = models.ForeignKey("front.FrontUser", on_delete=models.CASCADE, null=True)
    thumbnail = models.FileField(upload_to='%Y/%m/%d')

    def __str__(self):
        return "图书详情：title：%s; content:%s;" % (self.title, self.content)


class Comment(models.Model):
    text = models.TextField()
    origin_comment = models.ForeignKey('self', on_delete=models.CASCADE)
    author = models.ForeignKey("front.FrontUser", on_delete=models.CASCADE, null=True)
