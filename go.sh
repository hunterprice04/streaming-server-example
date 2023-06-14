#!/bin/bash

# build docker file and start them
docker-compose up -d --build

# create database migrations
docker-compose exec web python manage.py makemigrations

# migrate db
docker-compose exec web python manage.py migrate

# seed db with example data for the two files in the data folder 
docker-compose exec web python manage.py loaddata video/seed/0001_Video.json

# echo """
# from video.models import Video
# v1 = Video(video_id='03a1cc08-1537-4ef0-86bc-28eb053004ee', title='test 1', description='test 1 desc')
# v1.save()
# v2 = Video(video_id='176c5ef5-0c28-4728-a325-4659785db799', title='test 2', description='test 2 desc')
# v2.save()
# """ | docker-compose exec web python manage.py shell

# run to take down services
# docker-compose down
