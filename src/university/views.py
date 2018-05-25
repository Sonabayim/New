from django.http import HttpResponse
from django.shortcuts import render
from django.views import View
from django.views.generic import TemplateView
from .models import University
from Post.models import Post
# Create your views here.


def unviersity_listview(request):
	template_name = 'Home_p/home.html'
	queryset = University.objects.all()
	postset = Post.objects.all()
	context = {
		"object_list": queryset,
		"post_list": postset
	}
	return render(request, template_name, context)

