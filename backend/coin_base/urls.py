from django.urls import path

from .views import CoinListView

urlpatterns = [
    path("coin_list/", CoinListView.as_view(), name="coin_list"),
]