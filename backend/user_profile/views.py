from django.contrib.auth.models import User

from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import action

from .serializers import UserSerializer
from .permissions import IsOwner


class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_permissions(self):
        permission_classes = []

        if self.action == "create":
            permission_classes = [permissions.AllowAny]
        else: 
            permission_classes = [permissions.IsAuthenticated, IsOwner]
        return [permission() for permission in permission_classes]

    def list(self, request, *args, **kwargs):
        return Response({"detail": "This action is not allowed"})
    
    @action(methods=["get"], detail=False, permission_classes=[permissions.IsAuthenticated,], )
    def get_current_user(self, request):
        current_user = self.request.user
        user = self.serializer_class(current_user)
        return Response(user.data)
        
