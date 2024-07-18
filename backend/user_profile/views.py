from django.contrib.auth.models import User

from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from rest_framework.response import Response

from .serializers import UserSerializer
from .permissions import IsOwner


class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def list(self, request, *args, **kwargs):
        return Response({"detail": "This action is not allowed"})

    def get_permissions(self):
        permission_classes = []

        if self.action == "create":
            permission_classes = [permissions.AllowAny]
        else: 
            permission_classes = [permissions.IsAuthenticated, IsOwner]
        return [permission() for permission in permission_classes]
