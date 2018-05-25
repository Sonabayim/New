# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-05-17 07:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('university', '0006_university_timestamp'),
    ]

    operations = [
        migrations.AddField(
            model_name='university',
            name='updated',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='university',
            name='timestamp',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
