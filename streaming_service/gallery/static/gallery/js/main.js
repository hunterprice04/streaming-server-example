function getVideos() {
  return fetch("/video", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    console.log(response);
    return response.json();
  });
}

function main() {
  getVideos().then((videos) => {
    videos = JSON.parse(videos);
    const videoList = document.querySelector(".video-list");

    videos.forEach((video) => {
      const videoElement = new VideoCard(video.fields);
      videoList.appendChild(videoElement);
    });
    console.log(videoList);
  });
}

window.onload = main();
