import{i as f,S as m}from"./assets/vendor-7659544d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();function u(o){return o.hits.map(e=>`<div class="gallery-item">
              <a class="gallery-link" href="${e.largeImageURL}">
                  <img class="image" src="${e.webformatURL}" alt="${e.tags}" />
              </a>
              <div class="gallery-item-info">
                  <p class="gallery-info">
                      <span class="item-info">Likes: <span class ="span">${e.likes}</span></span>    
                  </p>
                  <p class="gallery-info">
                      <span class="item-info">Views: <span class ="span">${e.views}</span></span>    
                  </p>
                  <p class="gallery-info">
                      <span class="item-info">Comments: <span class ="span">${e.comments}</span></span>    
                  </p>
                  <p class="gallery-info">
                      <span class="item-info">Downloads: <span class ="span">${e.downloads}</span></span>    
                  </p>
              </div>
          </div>`).join("")}const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBrZZRDoIwDIYrwfDqTeQo3ohxEr0BXsW77GXFOFdkYcC6DuFPCJB1/7fCWgBgZEzfIPY256BYzqfkzE8nUNbCE+DzgqSKK8W6OVBV5xYk+ZUbgw/IFMVKmfxtng3ZYy5CjjBnISlzrXUtGcZiZpDxolsGIWItvTi/OK0xAuk7GhsBRjEGioNMmffMXKNEAAeRzENACYJc8QxF5IuJNBZhS2PSfBGwhNB9rjmpgHxZ5jqprAyC3jT0mi29RwSE5v6xhO9EhAjblN0tqS38G59t02ShKeCzU2Kh+SDE9z0GAUGxGPKaLS4F2aqVudcRENb8CIhovgeSMl/VwdQWbOPOl5yPvivs25b2MWjKJOu3hTX+AgZ5PpvL0NSkAAAAAElFTkSuQmCC",d="42692881-f0d4d17361a73f053244a2051",h="https://pixabay.com/api/",c=document.querySelector(".loader");function g(o){const e={key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0},a=new URLSearchParams(e);return c.style.display="block",fetch(`${h}?${a}`).then(s=>{if(!s.ok)throw new Error(`Error! Status: ${s.status}`);return s.json()}).then(s=>(c.style.display="none",s.hits.length===0&&f.error({iconUrl:A,position:"topRight",backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark",maxWidth:"432px",message:"There are no images matching your search query. Please, enter something else!"}),s)).catch(s=>{console.error("Error fetching data!",s)})}const y=new m(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),i=document.querySelector(".search-form"),l=document.querySelector(".gallery");let p="";i.addEventListener("submit",E);function E(o){o.preventDefault(),l.innerHTML="",p=i.elements.searchWord.value.trim(),g(p).then(e=>{const a=u(e);l.insertAdjacentHTML("beforeend",a),y.refresh()}).catch(e=>{console.error("Error:",e)}),i.reset()}
//# sourceMappingURL=commonHelpers.js.map