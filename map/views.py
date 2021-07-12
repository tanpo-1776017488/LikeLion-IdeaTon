from django.http import request
from django.shortcuts import render

# Create your views here.
def location(request):
    return render(request,'location.html')

def main(request):
    return render(request,'main.html')

def mainmenu(request):
    return render(request,'mainmenu.html')

def mymenu(request):
    return render(request,'mymenu.html')

def menulist(request):
    return render(request,'menulist.html')

def mymenulist(request):
    return render(request,'mymenulist.html')
