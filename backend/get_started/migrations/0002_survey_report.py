# Generated by Django 4.0.6 on 2023-07-23 08:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('get_started', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='survey',
            name='report',
            field=models.BooleanField(default=False),
        ),
    ]