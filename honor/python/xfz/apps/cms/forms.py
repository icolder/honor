from apps.forms import FormMixin
from django import forms


class EditNewsCategory(forms.Form):
    pk = forms.IntegerField()
    name = forms.CharField(max_length=100)
