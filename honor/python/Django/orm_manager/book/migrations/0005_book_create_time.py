# Generated by Django 2.2 on 2019-09-06 02:32

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0004_auto_20190905_2149'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='create_time',
            field=models.DateTimeField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
