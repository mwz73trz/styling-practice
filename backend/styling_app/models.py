from django.db import models
from django.contrib.auth.models import User

class Contact(models.Model):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    address = models.CharField(max_length=75)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=30)
    zip = models.CharField(max_length=5)
    phone = models.CharField(max_length=12)
    email = models.EmailField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='contacts', null=True, default=None)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
