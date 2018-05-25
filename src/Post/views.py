# from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from django.views import View
from django.views.generic import TemplateView, ListView
from Post.models import Post
# Create your views here.



def post_listview(request,pk=None):
	template_name = 'article.html' 
	# postset = Post.objects.all()
	# postset = Post.objects.get(id=pk)
	postset = get_object_or_404(Post, id=pk)
	print(postset.content)
	context = {
		"post_list": postset
	}

	return render(request, template_name, context)



class PostListView(ListView):
	template_name = 'article.html'
	postset = Post.objects.all()
	context = {
		"post_list": postset
	}

	# def get_object(self):
	# 	pk = self.kwargs.get("pk")
	# 	return PostListView.objects.get(id=pk)




