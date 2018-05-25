from django.db import models
from django.conf import settings
# Create your models here.
class Post(models.Model):
	user 		= models.ForeignKey(settings.AUTH_USER_MODEL,default=1)
	title		= models.CharField(max_length=120)
	content		= models.TextField(null=True)
	timestamp	= models.DateTimeField(auto_now_add=True)
	updated  	= models.DateTimeField(auto_now=True)
	def __str__(self):
		return self.title

