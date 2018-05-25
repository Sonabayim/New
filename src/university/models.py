from django.db import models

# Create your models here.
class University(models.Model):
	name		= models.CharField(max_length=120)
	# specialty	= models.CharField(max_length=120, null=True, blank=True)
	# representative	= models.CharField(max_length = 120, null=True, blank=True)
	location	= models.CharField(max_length = 120, null=True, blank=True)
	timestamp	= models.DateTimeField(auto_now_add=True)
	updated  	= models.DateTimeField(auto_now=True)
	def __str__(self):
		return self.name

