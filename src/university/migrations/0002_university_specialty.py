# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-05-17 07:03
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('university', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='university',
            name='specialty',
            field=models.CharField(blank=True, max_length=120, null=True),
        ),
    ]
