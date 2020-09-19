from rest_framework import viewsets
from meituan.models import Merchant
from .serializers import MerchantSerializer


class MerchantViewset(viewsets.ModelViewSet):
    queryset = Merchant.objects.all()
    serializer_class = MerchantSerializer
