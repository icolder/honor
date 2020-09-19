from django.shortcuts import render
from django.views.generic import View
from .forms import MessageBoardForm
from django.http import HttpResponse

class IndexView(View):
    def get(self, request):
        form = MessageBoardForm()
        return render(request, 'index.html', context={'form': form})


    def post(self, request):
        form = MessageBoardForm(request.POST)
        if form.is_valid():
            title = form.cleaned_data.get('title')
            context = form.cleaned_data.get('context')
            email = form.cleaned_data.get('email')
            reply = form.cleaned_data.get('reply')
            print(title)
            print(context)
            print(email)
            print(reply)
            return HttpResponse('提交成功')
        else:
            print(form.errors)
