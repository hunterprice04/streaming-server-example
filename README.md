# streaming-server-example

## Example Videos:

- https://samplelib.com/sample-mp4.html
- https://file-examples.com/index.php/sample-video-files/sample-mp4-files/

## Generating Video IDs

```bash
> uuidgen -x
```

## Generating Preview Frame

```bash
> ffmpeg -i video.mp4 -vf "select=eq(n\,34)" -vframes 1 first_frame.png
```

## Running this Demo

```bash
> python3 -m venv .venv
> source ./venv/bin/activate
> pip install -r requirements
> ./go.sh
```

This should start a server which is accessible at [http://localhost:8000](http://localhost:8000):


![image](https://github.com/hunterprice04/streaming-server-example/assets/55900647/2de1f898-fa76-4ad9-8422-241cab52e492)
