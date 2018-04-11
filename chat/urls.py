from django.contrib import admin
from django.urls import path
from core import views

urlpatterns = [
    path('', views.home, name="index"),
    path('chat/<str:name>/<str:room_name>/', views.chat, name="chat"),
    path('admin/', admin.site.urls)
]
