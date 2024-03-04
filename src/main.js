import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { renderMarkup } from './js/render-functions';
import { fetchImages } from './js/pixabay-api';

const lightbox = new SimpleLightbox('.gallery a', {
  nav: true,
  captions: true,
  captionsData: 'alt',
  captionDelay: 150,
});

const form = document.querySelector('.search-form');
const container = document.querySelector('.gallery');
let searchWord = '';

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  container.innerHTML = '';
  searchWord = form.elements.searchWord.value.trim();

  fetchImages(searchWord)
    .then(data => {
      const marcup = renderMarkup(data);
      container.insertAdjacentHTML('beforeend', marcup);

      lightbox.refresh();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  form.reset();
}