from django.http import JsonResponse
from django.shortcuts import render
from django.core import serializers

# Create your views here.


def gallery_home(request):
    return render(request, 'gallery.html')
