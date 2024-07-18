from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password", "first_name", "last_name", "email"]

        extra_kwargs = {
            "password": {
                "write_only": True
            }
        }

    def create(self, validated_data):
        user = User(**validated_data)
        password = validated_data["password"]
        try: 
            validate_password(password=password, user=user)
            user.set_password(password)
            user.save()
        except ValidationError as password_error:
            raise serializers.ValidationError({"password": password_error.messages})
        return user
