from rest_framework.routers import DefaultRouter

from .views import UserViewSet, ProfilePictureViewSet

router = DefaultRouter()

router.register(r"user", UserViewSet, basename="user")
router.register(r"picture", ProfilePictureViewSet, basename="picture")
