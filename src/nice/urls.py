"""nice URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from speciality.views import  SpecialityListView, speciality_listview
from Post.views import post_listview, PostListView

from profiles.views import ProfileFollowToggle, RegisterView, activate_user_view
from django.contrib.auth.views import LoginView

urlpatterns = [
    url(r'^admin/', admin.site.urls),
     url(r'^home/', speciality_listview, name ='home'),
     # url(r'^home/', SpecialityListView.as_view()),
     # url(r'^article/$', PostListView.as_view()),
     url(r'^article/',include('Post.urls')),
     # url(r'^article/(?P<pk>\d+)/$', PostListView.as_view()),
    url(r'^$', RegisterView.as_view(), name='register'),

    url(r'^login/$', LoginView.as_view(), name='login'),
    # url(r'^u/', include('profiles.urls', namespace='profiles')),
    # url(r'^u/', ProfileDetailView.as_view()),


     
   
 
]
if settings.DEBUG:
	urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    # urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

