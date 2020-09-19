from django.urls import path
from . import views

app_name = "front"

urlpatterns = [
    path('', views.one_to_one_view, name='one_to_one'),

]
