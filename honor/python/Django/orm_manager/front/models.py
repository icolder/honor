from django.db import models


class FrontUser(models.Model):
    username = models.CharField(max_length=200)
    address = models.CharField(max_length=100, null=True)


class UserExtension(models.Model):
    school = models.CharField(max_length=100)
    user = models.OneToOneField("FrontUser", on_delete=models.CASCADE, related_name='user')

