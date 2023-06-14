from django.db import models

# Create your models here.


class Video(models.Model):
    id = models.AutoField(primary_key=True)
    video_id = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
