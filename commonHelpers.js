import{i as u,S as m}from"./assets/vendor-7659544d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();function d(o){return o.hits.map(e=>`<div class="gallery-item">
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
          </div>`).join("")}const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBrZZRDoIwDIYrwfDqTeQo3ohxEr0BXsW77GXFOFdkYcC6DuFPCJB1/7fCWgBgZEzfIPY256BYzqfkzE8nUNbCE+DzgqSKK8W6OVBV5xYk+ZUbgw/IFMVKmfxtng3ZYy5CjjBnISlzrXUtGcZiZpDxolsGIWItvTi/OK0xAuk7GhsBRjEGioNMmffMXKNEAAeRzENACYJc8QxF5IuJNBZhS2PSfBGwhNB9rjmpgHxZ5jqprAyC3jT0mi29RwSE5v6xhO9EhAjblN0tqS38G59t02ShKeCzU2Kh+SDE9z0GAUGxGPKaLS4F2aqVudcRENb8CIhovgeSMl/VwdQWbOPOl5yPvivs25b2MWjKJOu3hTX+AgZ5PpvL0NSkAAAAAElFTkSuQmCC",h="42692881-f0d4d17361a73f053244a2051",g="https://pixabay.com/api/",p=document.querySelector(".loader");function y(o){const e={key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0},n=new URLSearchParams(e);return p.style.display="block",fetch(`${g}?${n}`).then(s=>{if(!s.ok)throw new Error(`Error! Status: ${s.status}`);return s.json()}).then(s=>(p.style.display="none",s.hits.length===0&&u.error({iconUrl:A,position:"topRight",backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark",maxWidth:"432px",message:"There are no images matching your search query. Please, enter something else!"}),s)).catch(s=>{console.error("Error fetching data!",s)})}const S=new m(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),c=document.querySelector(".search-form"),f=document.querySelector(".gallery"),l=document.querySelector(".loader");let i="";c.addEventListener("submit",E);l.style.display="none";function E(o){if(o.preventDefault(),l.style.display="inline-block",f.innerHTML="",i=c.elements.searchWord.value.trim(),i===""){alert("Будь ласка, введіть слово для пошуку"),l.style.display="none";return}y(i).then(e=>{const n=d(e);f.insertAdjacentHTML("beforeend",n),S.refresh()}).catch(e=>{console.error("Error:",e)}),c.reset()}
//# sourceMappingURL=commonHelpers.js.map
