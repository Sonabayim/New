# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-05-17 07:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('university', '0002_university_specialty'),
    ]

    operations = [
        migrations.AddField(
            model_name='university',
            name='representative',
            field=models.CharField(blank=True, max_length=120, null=True),
        ),
    ]
