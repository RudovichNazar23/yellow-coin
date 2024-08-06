from django.db import models

from django.contrib.auth.models import User

class ProfilePicture(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name="pictures")
    picture = models.ImageField(upload_to="media")

    def __str__(self):
        return f"{self.user}"