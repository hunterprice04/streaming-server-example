from django.http import JsonResponse, Http404
from django.shortcuts import render
from django.core import serializers  # Create your views here.
from django.views.static import serve
from video.models import Video
import os
# Create your views here.

# VIDEO_DIR = '/home/hp/github/research/streaming-server-example/data'
VIDEO_DIR = "/data"


def _get_video_file(video_id, filename):
    path = os.path.join(VIDEO_DIR, video_id, filename)
    if not os.path.exists(path):
        raise Http404

    return path


def get_videos(request):
    videos = Video.objects.all()
    video_list = serializers.serialize('json', videos)
    return JsonResponse(video_list, safe=False)


def get_video_metadata(request, video_id):
    video = Video.objects.get(video_id=video_id)
    video_metadata = serializers.serialize('json', [video])
    return JsonResponse(video_metadata, safe=False)


def get_video_preview(request, video_id):
    frame_path = _get_video_file(video_id, 'first_frame.png')
    return serve(request, os.path.basename(frame_path), os.path.dirname(frame_path))
#
# def get_video_stream(request, video_id):
#     video = Video.objects.get(video_id=video_id)
#     video_stream = video.video_stream
#     return JsonResponse(video_stream, safe=False)
