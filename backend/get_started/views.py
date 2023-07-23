from rest_framework.response import Response
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser

from .models import Survey
from .serializers import SurveySerializer


@api_view(['POST'])
@parser_classes([JSONParser])
def submitSurvey(request):
    data = request.data
    serializer = SurveySerializer(data = data)
    if serializer.is_valid():
        serializer.save()
        return Response('Submited', status=201)
    else:
        return Response('Error', status=400)