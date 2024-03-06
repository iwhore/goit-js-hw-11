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
const loader = document.querySelector('.loader');
let searchWord = '';

form.addEventListener('submit', onSubmit);

loader.style.display = 'none';


function onSubmit(event) {
  event.preventDefault();

  loader.style.display = 'inline-block';


  container.innerHTML = '';
  searchWord = form.elements.searchWord.value.trim();

  if (searchWord === '') {
    alert('Будь ласка, введіть слово для пошуку');
    loader.style.display = 'none';
    return; 
  }

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