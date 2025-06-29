/*import { GenreService } from "./src/utils/GenreService.js";*/
import { DateUtils } from "./src/utils/DateUtils.js";
/*import { podcasts } from "./data.js";*/





const template = document.createElement("template");

template.innerHTML = `
< style >

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

</style >

<div class="card">
   <img src="${podcast.image}" alt="${podcast.title} cover"/>
    <h3>${podcast.title}</h3>
    <p>${podcast.seasons} season${podcast.seasons > 1 ? "s" : ""}</p>
    <div class="tags">${genreNames
      .map((g) => `<span class="tag">${g}</span>`)
      .join("")}</div>
    <p class="updated-text">${DateUtils.format(podcast.updated)}</p>
</div>
`


class podcastPreview extends HTMLElement{
    constructor() {
        super();
        const shadowDom = this.attachShadow({ mode: "open" });
        shadowDom.append(template.content.cloneNode(true))
        this.innerHTML
    }
}

customElements.define("podcast-preview", podcastPreview);