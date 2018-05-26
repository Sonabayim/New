from django.contrib.auth.decorators import login_required

from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.views import View
from django.views.generic import TemplateView, DetailView
from .models import Speciality
from Post.models import Post
from Post.forms import PostCreateForm
from django.contrib.auth import get_user_model
# from 
# Create your views here.
@login_required()
def speciality_listview(request):
	template_name = 'home.html'
	userset = get_user_model()
	userset = userset.objects.all()
	queryset = Speciality.objects.all()
	postset = reversed(Post.objects.all())
	context = {
		"post_list": postset,
		"object_list":queryset,
		"user_list": userset,
	}
	
	return render(request, template_name, context)





class SpecialityListView(DetailView):
	postset 	= Speciality.objects.all()
	queryset 	= Post.objects.all()
	template_name = 'home.html'
	def get_object(self):
		print(self.kwargs)	
		pk = self.kwargs.get("pk")
		print(pk)
		return SpecialityListView.objects.get(id=pk)
	def get_context_data(self,*args,**kwargs):
		context = super(SpecialityListView, self).get_context_data(*args,**kwargs)
		print(context)
		return context
	context = {
		"post_list": postset,
		"object_list":queryset,
	}
