from rest_framework import permissions
from rest_framework.generics import ListAPIView

from .serializers import CoinSerializer
from .models import Coin


class CoinListView(ListAPIView):
    serializer_class = CoinSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Coin.objects.all()
