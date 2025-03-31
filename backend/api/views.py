from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics, status
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from rest_framework import serializers

@api_view(['GET'])
def hello_world(request):
    return Response({"message": "Hello from Django!"})