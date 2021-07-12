"""ideaton URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
import user.views
import map.views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',user.views.login,name='login'),
    path('location/',map.views.location,name='location'),
    path('mainmenu/main/',map.views.main,name='main'),
    path('mainmenu/',map.views.mainmenu,name='mainmenu'),
    path('mainmenu/mymenu/',map.views.mymenu,name='mymenu'),
    path('mainmenu/main/menulist/',map.views.menulist,name='menulist'),
    path('mainmenu/mymenu/mymenulist/',map.views.mymenulist,name='mymenulist'),

]
