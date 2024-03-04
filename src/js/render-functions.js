export function renderMarkup(data) {
    return data.hits
      .map(
        el =>
          `<div class="gallery-item">
              <a class="gallery-link" href="${el.largeImageURL}">
                  <img class="image" src="${el.webformatURL}" alt="${el.tags}" />
              </a>
              <div class="gallery-item-info">
                  <p class="gallery-info">
                      <span class="item-info">Likes: <span class ="span">${el.likes}</span></span>    
                  </p>
                  <p class="gallery-info">
                      <span class="item-info">Views: <span class ="span">${el.views}</span></span>    
                  </p>
                  <p class="gallery-info">
                      <span class="item-info">Comments: <span class ="span">${el.comments}</span></span>    
                  </p>
                  <p class="gallery-info">
                      <span class="item-info">Downloads: <span class ="span">${el.downloads}</span></span>    
                  </p>
              </div>
          </div>`
      )
    .join('');
}
