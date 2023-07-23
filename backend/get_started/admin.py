from django.contrib import admin
from .models import Survey


class SurveyAdmin(admin.ModelAdmin):
    list_display = ('email', 'date_submitted', 'report',)

admin.site.register(Survey, SurveyAdmin)