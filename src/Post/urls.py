from django.conf.urls import url

from Post.views import post_listview

urlpatterns = [
	url(r'^(?P<pk>\d+)/$',post_listview)
]