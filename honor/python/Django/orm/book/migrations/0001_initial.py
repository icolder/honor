# Generated by Django 2.2 on 2019-07-20 12:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('author', models.CharField(max_length=100)),
                ('price', models.FloatField(default=0)),
            ],
        ),
    ]
