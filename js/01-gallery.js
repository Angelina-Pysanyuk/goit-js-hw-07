import { galleryItems } from './gallery-items.js';
// Change code below this line
let instance;

const markup = galleryItems.map(({preview, original, description}) =>
`<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
</div>`).join("");

const galleryContainer = document.querySelector(".gallery");
galleryContainer.insertAdjacentHTML('beforeend', markup);

function onClick (event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;
    const originalImage = event.target.dataset.source;
    instance = basicLightbox.create(`<img src="${originalImage}">`);
    instance.show();
    document.addEventListener("keydown", closeWithEscape);
};

galleryContainer.addEventListener("click", onClick);

function closeWithEscape (event) {
    if (event.keyCode === 27) {
        instance.close();
        document.removeEventListener("keydown", closeWithEscape);
    }
}