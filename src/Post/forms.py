from django import forms

class PostCreateForm(forms.Form):
	title		= forms.CharField(max_length=120)
	content		= forms.CharField(max_length=12000,required=False)