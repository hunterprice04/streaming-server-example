class VideoCard extends HTMLElement {
  constructor(data) {
    super();
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        article {
          display: flex;
          flex-direction: column;
          align-items: left;
          padding: 0px;
          border-radius: 5px;
          background-color: #cccccc;
          height: 200px;
          width: 200px;
        }
        .video--title {
          padding: 0px 10px;
          margin: 0px;
          font-weight: bold;
          font-size: 20px;
        }
        .video--description {
          padding: 0px 10px;
          margin: 0px;
        }
        .video--thumbnail {
          padding: 0px;
          margin: 0px;
          border-radius: 5px;
          width: 200px;
        }
      </style>

      <article>
        <img class='video--thumbnail' src='https://via.placeholder.com/150' alt='thumbnail'>
        <h1 class='video--title'>Title</h2>
        <p class='video--description'>Description</p>
      </article>
    `;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.data = data;
    this.video_id = data.video_id;
    this.title = data.title;
    this.description = data.description;
    this.created_at = data.created_at;
    this.setupCard();
  }

  setupCard() {
    // Setup card content
    const title = this.shadowRoot.querySelector(".video--title");
    const description = this.shadowRoot.querySelector(".video--description");
    const thumbnail = this.shadowRoot.querySelector(".video--thumbnail");
    title.innerHTML = this.title;
    description.innerHTML = this.description;
    thumbnail.src = `/video/${this.video_id}/preview`;

    // Setup card event listeners
    const card = this.shadowRoot.querySelector("article");
    card.addEventListener("click", () => {
      console.log("clicked");
    });
  }
}
customElements.define("video-card", VideoCard);
