# Generated by Django 2.2 on 2019-07-22 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0003_book_creat_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='creat_time',
            field=models.DateTimeField(auto_now_add=True, db_column='time'),
        ),
    ]
