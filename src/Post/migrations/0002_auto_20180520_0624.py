# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-05-20 06:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Post', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='content',
            field=models.TextField(max_length=10000, null=True),
        ),
    ]