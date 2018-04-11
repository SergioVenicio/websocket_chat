import json
from django.shortcuts import render
from django.utils.safestring import mark_safe


def home(request):
    context = {}
    return render(request, 'chat/index.html', context)


def chat(request, name, room_name):
    context = {
        'name': mark_safe(json.dumps(name)),
        'room_name': mark_safe(json.dumps(room_name))
    }
    return render(request, 'chat/chat.html', context)
