import { galleryItems } from './gallery-items.js';
// Change code below this line

const markup = galleryItems.map(({preview, original, description}) =>
`<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join("");

const galleryContainer = document.querySelector(".gallery");
galleryContainer.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', {
    overlay: true,
    captionsData: 'alt',
    captions: true,
    captionPosition: 'bottom',
    captionDelay: 250
});