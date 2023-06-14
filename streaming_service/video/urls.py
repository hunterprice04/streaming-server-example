from django.urls import path
from . import views


urlpatterns = [
    path('', views.get_videos, name='get_videos'),
    path('<str:video_id>/data',
         views.get_video_metadata, name='get_video_metadata'),
    path('<str:video_id>/preview',
         views.get_video_preview, name='get_video_preview'),
    # path('<video_id:video_id>/stream',
    #      views.get_video_metadata, name='get_video_stream'),

]
