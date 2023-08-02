from django.db import models


class Survey(models.Model):
    businessType = models.CharField(max_length=100, null=False, blank=False)
    industry = models.CharField(max_length=100, null=False, blank=False)
    companySize = models.CharField(max_length=100, null=False, blank=False)
    mainGoal = models.CharField(max_length=100, null=False, blank=False)
    budget = models.CharField(max_length=100, null=False, blank=False)
    website = models.CharField(max_length=200, null=False, blank=False)
    socialMedia = models.CharField(max_length=200, null=False, blank=False)
    advertising = models.CharField(max_length=200, null=False, blank=False)
    email = models.CharField(max_length=100, null=False, blank=False)

    report = models.BooleanField(default=False, editable=True)
    date_submitted = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email