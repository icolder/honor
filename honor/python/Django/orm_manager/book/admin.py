from django.urls import path
from . import views
from django.views.generic import TemplateView

app_name = "book"

urlpatterns = [
    path('', views.index, name='index'),
    path('many_to_many/', views.many_to_many_view, name='many_to_many'),
    path('add_article/', views.AddArticleView.as_view(), name='add_article'),
    path('json/', views.jsonresponse_view, name='json'),
    path('about/',TemplateView.as_view(template_name='about.html'), name='about'),
    path('article_list/', views.ArticleListView.as_view(), name='article_list')
]
