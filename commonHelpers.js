import{i as m,S as u}from"./assets/vendor-7659544d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();function d(o){return o.hits.map(e=>`<div class="gallery-item">
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
          </div>`).join("")}const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBrZZRDoIwDIYrwfDqTeQo3ohxEr0BXsW77GXFOFdkYcC6DuFPCJB1/7fCWgBgZEzfIPY256BYzqfkzE8nUNbCE+DzgqSKK8W6OVBV5xYk+ZUbgw/IFMVKmfxtng3ZYy5CjjBnISlzrXUtGcZiZpDxolsGIWItvTi/OK0xAuk7GhsBRjEGioNMmffMXKNEAAeRzENACYJc8QxF5IuJNBZhS2PSfBGwhNB9rjmpgHxZ5jqprAyC3jT0mi29RwSE5v6xhO9EhAjblN0tqS38G59t02ShKeCzU2Kh+SDE9z0GAUGxGPKaLS4F2aqVudcRENb8CIhovgeSMl/VwdQWbOPOl5yPvivs25b2MWjKJOu3hTX+AgZ5PpvL0NSkAAAAAElFTkSuQmCC",g="42692881-f0d4d17361a73f053244a2051",h="https://pixabay.com/api/",p=document.querySelector(".loader");function y(o){const e={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0},a=new URLSearchParams(e);return p.style.display="block",fetch(`${h}?${a}`).then(s=>{if(!s.ok)throw new Error(`Error! Status: ${s.status}`);return s.json()}).then(s=>(p.style.display="none",s.hits.length===0&&m.error({iconUrl:A,position:"topRight",backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark",maxWidth:"432px",message:"There are no images matching your search query. Please, enter something else!"}),s)).catch(s=>{console.error("Error fetching data!",s)})}const F=new u(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),l=document.querySelector(".search-form"),f=document.querySelector(".gallery"),c=document.querySelector(".loader");let i="";l.addEventListener("submit",E);c.style.display="none";function E(o){if(o.preventDefault(),c.style.display="inline-block",f.innerHTML="",i=l.elements.searchWord.value.trim(),i===""){m.error({title:"Error",titleColor:"#FFFFFF",backgroundColor:"#ef4040",position:"topRight",messageColor:"#FFFFFF",message:"Please search for something"}),c.style.display="none";return}y(i).then(e=>{const a=d(e);f.insertAdjacentHTML("beforeend",a),F.refresh()}).catch(e=>{console.error("Error:",e)}),l.reset()}
//# sourceMappingURL=commonHelpers.js.map
