from django.db import models


class Survey(models.Model):
    businessType = models.CharField(max_length=100, null=True, blank=True)
    industry = models.CharField(max_length=100, null=True, blank=True)
    mainGoal = models.CharField(max_length=100, null=True, blank=True)
    website = models.CharField(max_length=200, null=True, blank=True)
    socialMedia = models.CharField(max_length=200, null=True, blank=True)
    advertising = models.CharField(max_length=200, null=True, blank=True)
    email = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.email