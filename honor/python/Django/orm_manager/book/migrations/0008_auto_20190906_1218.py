# Generated by Django 2.2 on 2019-09-06 04:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0007_book_telephone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='telephone',
            field=models.IntegerField(null=True, unique=True),
        ),
    ]
