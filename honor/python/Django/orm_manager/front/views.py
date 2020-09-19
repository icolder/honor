from django.shortcuts import render
from .models import FrontUser, UserExtension


def one_to_one_view(request):
    # extension = UserExtension(school="临沂大学")
    # frontuser = FrontUser(username="少白")
    # frontuser.save()
    # extension.user = frontuser
    # extension.save()
    username = FrontUser.objects.filter(username='少白').first()
    school = username.user.school
    return render(request, 'front.html', context={'school': school})

