# Generated by Django 4.0.6 on 2023-07-23 08:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Survey',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('businessType', models.CharField(max_length=100)),
                ('industry', models.CharField(max_length=100)),
                ('mainGoal', models.CharField(max_length=100)),
                ('website', models.CharField(max_length=200)),
                ('socialMedia', models.CharField(max_length=200)),
                ('advertising', models.CharField(max_length=200)),
                ('email', models.CharField(max_length=100)),
                ('date_submitted', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]