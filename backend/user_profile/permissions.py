from rest_framework.permissions import BasePermission


class IsOwner(BasePermission):
    def has_object_permission(self, request, view, obj):
        if view.basename == "user":
            return request.user == obj
        elif view.basename == "picture":
            return request.user == obj.user

        
