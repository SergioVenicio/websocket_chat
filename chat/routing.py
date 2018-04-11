from . import consumers
from django.conf.urls import re_path
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter


websocket_urlpatterns = [
    re_path('^ws/chat/(?P<name>[^/]+)/(?P<room_name>[^/]+)/$', consumers.ChatConsumer),
]

application = ProtocolTypeRouter({
    'websocket': AuthMiddlewareStack(
        URLRouter(websocket_urlpatterns)
    )
})
