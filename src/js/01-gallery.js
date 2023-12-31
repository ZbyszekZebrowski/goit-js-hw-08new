import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const ulGallery = document.querySelector('.gallery');
const addGallary = createGallery(galleryItems);

ulGallery.innerHTML = addGallary;

function createGallery(images) {
  return images
    .map(
      image =>
        `
        <li class="gallery__item">
            <a class="gallery__link" href="${image.original}">
                <img class="gallery__image" src="${image.preview}" alt="${image.description}" title="${image.description}" />
            </a>
        </li>
        `
    )
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });