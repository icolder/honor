# Generated by Django 2.2 on 2019-07-23 03:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0005_auto_20190722_2234'),
    ]

    operations = [
        migrations.AddField(
            model_name='publisher',
            name='book',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='book.Book'),
            preserve_default=False,
        ),
    ]
