import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
import iconError from '../img/icon-error.png';

const KEY = '42692881-f0d4d17361a73f053244a2051';
const URL = 'https://pixabay.com/api/';
const loader = document.querySelector('.loader');

export function fetchImages(searchWord) {
  const searchParamObj = {
    key: KEY,
    q: searchWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  const searchParams = new URLSearchParams(searchParamObj);

  loader.style.display = 'block';

  return fetch(`${URL}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      loader.style.display = 'none';

      if (data.hits.length === 0) {
        iziToast.error({
          iconUrl: iconError,
          position: 'topRight',
          backgroundColor: '#ef4040',
          titleColor: '#FFFFFF',
          messageColor: '#FFFFFF',
          theme: 'dark',
          maxWidth: '432px',
          message:
            'There are no images matching your search query. Please, enter something else!',
        });
      }
      return data;
    })
    .catch(error => {
      console.error('Error fetching data!', error);
    });
}