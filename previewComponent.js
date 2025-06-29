import { GenreService } from "./src/utils/GenreService.js";
import { DateUtils } from "./src/utils/DateUtils.js";

console.log("this page is linked");


const template = document.createElement("template");

template.innerHTML = `
<style>

    .card {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s;
    }

    .card:hover {
    transform: scale(1.02);
    }

    .card img {
    width: 100%;
    border-radius: 6px;
    }

    .card h3 {
    margin: 0.5rem 0;
    }

    .card p {
    margin: 0px;
    font-size: 0.8rem;
    color: var(--grey-text);
    }

    .tags {
    margin: 0.5rem 0;
    }

    .tag {
    background: #eee;
    padding: 0.3rem 0.6rem;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    border-radius: 4px;
    display: inline-block;
    font-size: 0.8rem;
    }

    .updated-text {
    font-size: 0.8rem;
    color: var(--grey-text);
    }

</style>

 <div class="card">
    <img class="poster" />
    <h3 class="title"></h3>
    <p class="season-count"></p>
    <div class="tags"></div>
    <p class="updated-text"></p>
  </div>
`


class podcastPreview extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    set data(podcast) {
        this.podcast = podcast;

        const clone = template.content.cloneNode(true);

        clone.querySelector(".poster").src = podcast.image;
        clone.querySelector(".poster").alt = `${podcast.title} cover`;
        clone.querySelector(".title").textContent = podcast.title;
        clone.querySelector(".season-count").textContent = `${podcast.seasons} season${podcast.seasons > 1 ? "s" : ""}`;
        clone.querySelector(".tags").innerHTML = GenreService.getNames(podcast.genres)
            .map((g) => `<span class="tag">${g}</span>`)
            .join("");
        clone.querySelector(".updated-text").textContent = DateUtils.format(podcast.updated);

        this.shadow.innerHTML = "";
        this.shadow.appendChild(clone);
    }

    connectedCallback() {
        this.shadow.addEventListener("click", () => {
            if (this.podcast && window.modalOpen) {
                window.modalOpen(this.podcast);
            }
        });
    }
}

customElements.define("podcast-preview", podcastPreview);