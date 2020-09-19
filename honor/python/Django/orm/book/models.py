from django.db import models

# ORM 模型的创建和映射


class Tag(models.Model):
    name = models.CharField(max_length=100)
    books = models.ManyToManyField('Book')

class Book(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, null=False)
    author = models.CharField(max_length=100, null=False)
    price = models.FloatField(null=False, default=0)
    creat_time = models.DateTimeField(auto_now_add=True, db_column='time')
    content = models.CharField(max_length=100, null=True)

    def __str__(self):
        return "<Book:({name},{author},{price})>".format(name=self.name, author=self.author, price=self.price)

    class Meta:
        db_table = 'book'

class Publisher(models.Model):
    name = models.CharField(max_length=100, null=False)
    address = models.CharField(max_length=100, null=False)
    book = models.ForeignKey('Book', on_delete=models.CASCADE)

    def __str__(self):
        return "<Publisher:{name},{address}>".format(name=self.name,address=self.address)



# python manage.py makemigrations
# python manage.py migrate
