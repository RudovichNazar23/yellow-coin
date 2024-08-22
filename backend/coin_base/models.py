from django.db import models


class Coin(models.Model):
    title = models.CharField(max_length=100)
    metal = models.CharField(max_length=100)
    weight = models.CharField(max_length=100)
    assay = models.CharField(max_length=100)
    diameter = models.CharField(max_length=50)
    country_of_origin = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    circulation = models.CharField(max_length=100)
    mint = models.CharField(max_length=100)
    year_of_issue = models.CharField(max_length=100)
    denomination = models.CharField(max_length=50)
    coin_image = models.ImageField(upload_to="coin_images")

    def __str__(self):
        return f"{self.title}"

