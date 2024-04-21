import"./assets/styles-d195b8d2.js";import{S as p,i as o}from"./assets/vendor-d19ad561.js";function y(t){const r=document.querySelector(".gallery"),a=t.map(({webformatURL:e,largeImageURL:c,tags:n,likes:h,views:d,comments:m,downloads:u})=>`
  
        <div class="gallery-card">
            <li class="gallery-items">
                <a href="${c}">
                <img src="${e}" alt="${n}" class="gallery-img"></a>
                <div class="card-text-div">
                    <ul class="card-text-list">
                        <li class="card-text">
                            <h2>Likes</h2>
                            <p>${h}</p>
                        </li>
                        <li class="card-text">
                            <h2>Views</h2>
                            <p>${d}</p>
                        </li>
                        <li class="card-text">
                            <h2>Comments</h2>
                            <p>${m}</p>
                        </li>
                        <li class="card-text">
                            <h2>Downloads</h2>
                            <p>${u}</p>
                        </li>
                    </ul>
                </div>
                
            </li>
        </div>`).join("");r.insertAdjacentHTML("beforeend",a),new p(".gallery a",{captionsData:"alt",captionDelay:150,captionPosition:"bottom",widthRatio:.9,heightRatio:.8}).refresh()}function g(t){const r="43230635-158e2f6795128fbec19d81d21",a="https://pixabay.com/api/",i=new URLSearchParams({key:r,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`${a}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>{e.total||o.error({title:"Error",position:"center",message:"Sorry, there are no images matching your search query. Please try again!"}),y(e.hits)}).catch(e=>{o.error({title:"Error",position:"topRight",message:"Oops! Something went wrong!"})}).finally(()=>loader.hidden=!0)}const l=document.querySelector(".search-form"),f=document.querySelector(".gallery"),s=document.querySelector(".loader");l.addEventListener("submit",S);s.hidden=!0;function S(t){t.preventDefault(),f.innerHTML="",s.hidden=!1;const{searchRequest:r}=t.currentTarget.elements;let a=r.value;g(a),l.reset()}
//# sourceMappingURL=commonHelpers3.js.map
