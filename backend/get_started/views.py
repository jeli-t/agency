from rest_framework.response import Response
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser
from django.conf import settings
from django.core.mail import send_mail

from .models import Survey
from .serializers import SurveySerializer


@api_view(['POST'])
@parser_classes([JSONParser])
def submitSurvey(request):
    data = request.data
    serializer = SurveySerializer(data = data)
    if serializer.is_valid():
        serializer.save()
        subject = 'New report request'
        message = f'There is new pending report request from {data["email"]}. Check django admin panel for more info.'
        email_from = settings.EMAIL_HOST_USER
        recipient_list = ['agency@jeli.pl',]
        try:
            send_mail(subject, message, email_from, recipient_list)
        except: pass
        return Response('Submited', status=201)
    else:
        return Response('Error', status=400)