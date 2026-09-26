import{g as n,S as v,a,b as i,c as h,d as I,e as M,h as T,f as D}from"./index-2df84ebf.js";import{S as x,N as B}from"./navigation-5b531aaf.js";n.registerPlugin(v);const H=({element:t,properties:o})=>{const e=t.querySelector(".js-category-image"),r=t.querySelector(".js-category-title"),s=t.querySelector(".js-category-copy");return n.fromTo(e,{yPercent:20},{yPercent:-20,scrollTrigger:{trigger:t,scrub:1,start:"bottom bottom",end:"bottom top"}}),n.matchMedia().add("(min-width: 768px)",()=>{n.fromTo(r,{yPercent:200,opacity:0},{yPercent:0,opacity:1,scrollTrigger:{trigger:r,scrub:1,start:"top bottom",end:"top center"}}),n.fromTo(s,{yPercent:50,opacity:0},{yPercent:0,opacity:1,scrollTrigger:{trigger:s,scrub:1,start:"top bottom",end:"top center"}})}),{}},A=".js-category-banner",N="CategoryBanner",E=()=>a({componentName:N,className:A}).map(o=>{const e={...o.dataset},r=H({element:o,properties:e});return i({componentName:N,element:o,properties:e,methods:r}),r});n.registerPlugin(v);const F=({element:t,properties:o})=>{const e=t.querySelector(".js-intro-category-title");return n.fromTo(e,{yPercent:50},{yPercent:0,scrollTrigger:{trigger:e,scrub:1,start:"top bottom",end:"top center"}}),{}},Q=".js-intro-category",$="IntroAalberts",V=()=>a({componentName:$,className:Q}).map(o=>{const e={...o.dataset},r=F({element:o,properties:e});return i({componentName:$,element:o,properties:e,methods:r}),r});const W=({element:t,properties:o})=>({}),z=".js-why-choose",f="WhyChoose",G=()=>a({componentName:f,className:z}).map(o=>{const e={...o.dataset},r=W({element:o,properties:e});return i({componentName:f,element:o,properties:e,methods:r}),r});n.registerPlugin(v);const J=({element:t,background:o})=>{n.to(o,{yPercent:20,scrollTrigger:{trigger:t,scrub:0,start:"top top",end:"bottom top"}})},R=({background:t,title:o})=>{const e=n.timeline();e.fromTo(t,{scale:1.2},{scale:1,duration:1.5}),e.fromTo(o,{yPercent:30,opacity:0},{yPercent:0,opacity:1,duration:1.5},"<")},K=({element:t,properties:o})=>{const e=t.querySelector(".js-hero-background"),r=t.querySelector(".js-hero-title");return R({background:e,title:r}),J({element:t,background:e}),{}},U=".js-product-hero",w="ProductHero",X=()=>a({componentName:w,className:U}).map(o=>{const e={...o.dataset},r=K({element:o,properties:e});return i({componentName:w,element:o,properties:e,methods:r}),r});const Y=({element:t,properties:o})=>({}),Z=".js-quick-links-card",S="QuickLinksCard",tt=()=>a({componentName:S,className:Z}).map(o=>{const e={...o.dataset},r=Y({element:o,properties:e});return i({componentName:S,element:o,properties:e,methods:r}),r});const ot=({element:t})=>{const o=t.querySelector(".js-quick-links-swiper");return o?(new x(o,{slidesPerView:1,spaceBetween:20,breakpoints:{760:{slidesPerView:3,spaceBetween:40}}}),{}):{}},et=".js-quick-links",j="QuickLinks",rt=()=>a({componentName:j,className:et}).map(o=>{const e={...o.dataset},r=ot({element:o,properties:e});return i({componentName:j,element:o,properties:e,methods:r}),r});const st=({element:t,properties:o})=>({}),nt=".js-product-grid",k="ProductGrid",ct=()=>a({componentName:k,className:nt}).map(o=>{const e={...o.dataset},r=st({element:o,properties:e});return i({componentName:k,element:o,properties:e,methods:r}),r});const at=async({id:t})=>{if(!t)return;const{open:o,addLoader:e}=h("OverlayProduct");o(),e();const r=new FormData;r.append("action","get_products_posts"),r.append("id",t);const s=await fetch("/wp-admin/admin-ajax.php",{method:"POST",credentials:"same-origin",body:r});if(!s.ok){console.warn("error on connections");return}const c=await s.json(),{productFound:d}=c;if(!d){console.warn("product not founded");return}const{addContent:p}=h("OverlayProduct");p({id:t,data:c})},it=({element:t,properties:o})=>{const{id:e}=o;return t.addEventListener("click",()=>{t.classList.contains("js-should-download")&&at({id:e})}),n.fromTo(t,{yPercent:20},{yPercent:0,scrollTrigger:{trigger:t,scrub:1,start:"top bottom",end:"top center"}}),{}},dt=".js-product-card",P="ProductCard",pt=()=>a({componentName:P,className:dt}).map(o=>{const e={...o.dataset},r=it({element:o,properties:e});return i({componentName:P,element:o,properties:e,methods:r}),r});async function lt({id:t,mail:o}){if(!t||!o)return{status:!1};const e=new FormData;e.append("action","save_product_emails"),e.append("id",t),e.append("mail",o);const r=await fetch("/wp-admin/admin-ajax.php",{method:"POST",credentials:"same-origin",body:e});if(!r.ok)return console.warn("error on connections"),{status:!1};const s=await r.json(),{saved:c}=s;return c?{status:!0}:(console.warn("product not founded"),{status:!1})}const C=({form:t,downloadAction:o,downloadUrl:e,downloadLabel:r})=>{const s=`
        <a
            class="c-overlay-product__download-cta btn is-black"
            target="_blank"
            href="${e}"
            >${r}</a
        >
    `;o.insertAdjacentHTML("afterbegin",s),t.style.display="none",o.style.display="block"},ut=({form:t,downloadAction:o,downloadUrl:e,downloadLabel:r,id:s})=>{const c=localStorage.getItem("productList"),d=c?JSON.parse(c):[];if(d.indexOf(s)>-1){C({form:t,downloadAction:o,downloadUrl:e,downloadLabel:r});return}t.addEventListener("submit",async u=>{u.preventDefault();const m=t.querySelector("#product-email").value;if(d.push(s),localStorage.setItem("productList",JSON.stringify(d)),!await lt({id:s,mail:m})){console.warn("mail soarage fail");return}console.warn("mail ok"),C({form:t,downloadAction:o,downloadUrl:e,downloadLabel:r})})},mt=t=>t.map(o=>`
                <div class="c-overlay-product__slide swiper-slide">
                    <img class="c-overlay-product__image" src="${o.image}" />
                </div>
            `).join(""),yt=t=>{const o=t.length>1?"":"hide-nav";return t?` <div
              class="c-overlay-product__slider swiper js-product-slider"
          >
              <div class="swiper-wrapper">
                  ${mt(t)}
              </div>
              <nav class="c-overlay-product__nav ${o}">
                  <button
                      class="btn-slide btn-slide--prev c-overlay-product__prev js-product-prev"
                  ></button>
                  <button
                      class="btn-slide btn-slide--next c-overlay-product__next js-product-next"
                  ></button>
              </nav>
          </div>`:""},gt=t=>{const o=t.querySelector(".js-product-slider"),e=t.querySelector(".js-product-prev"),r=t.querySelector(".js-product-next");if(!o)return()=>{};const s=new x(o,{modules:[B],loop:!0,navigation:{nextEl:r,prevEl:e}});return()=>s==null?void 0:s.destroy()};let y=()=>{};const vt=t=>{document.body.style.overflow="hidden",t.classList.add("active"),I()},bt=t=>{const o=` <span
            class="c-overlay-product__background js-product-background"
        ></span>
        <div
            class="o-loader c-overlay-product__loader js-product-loader"
        ></div>`;t.innerHTML="",t.insertAdjacentHTML("afterbegin",o)},g=t=>{M(),y(),y=()=>{},T.useFrame(()=>t.classList.remove("has-content")),t.classList.remove("active"),setTimeout(()=>{t.innerHTML="",document.body.style.overflow=""},400)},_t=t=>t.map(o=>`<span>${o.name}</span>`).join(""),ht=({element:t,id:o,data:e})=>{const{download:r,gallery:s,category:c,title:d,description:p,acceptance_copy:b,download_label:u,submit_label:_}=e,m=`
        <div class="c-overlay-product__content">
            <button
                class="c-overlay-product__close js-product-close"
                type="button"
            ></button>
            <div class="c-overlay-product__left">
                ${yt(s)}
            </div>
            <div class="c-overlay-product__right">
                <h3 class="copy c-overlay-product__category">
                    ${_t(c)}
                </h3>
                <h2 class="title-l  c-overlay-product__title">${d}</h2>
                <p class="copy-m c-overlay-product__copy">${p}</p>
                <form
                    class="c-overlay-product__actions"
                    action=""
                    id="product-form"
                >
                    <div class="c-overlay-product__grid">
                        <input
                            class="c-overlay-product__input"
                            type="email"
                            placeholder="your email"
                            id="product-email"
                            required
                        />
                        <button
                            class="c-overlay-product__submit js-product-submit"
                            type="submit"
                        >
                            ${_}
                        </button>
                    </div>
                    <div class="c-overlay-product__acceptance">
                        <label>
                            <input
                                class="o-checkbox"
                                type="checkbox"
                                id="product-accept"
                                name="product-accept"
                                required
                            />
                            <span>${b}</span>
                        </label>
                    </div>
                </form>
                <div
                    class="c-overlay-product__download"
                    id="product-download"
                ></div>
            </div>
        </div>
    `,l=t.querySelector(".js-product-loader");l==null||l.remove(),t.insertAdjacentHTML("beforeend",m),ut({form:t.querySelector("#product-form"),downloadAction:t.querySelector("#product-download"),downloadUrl:r,downloadLabel:u,id:o});const q=t.querySelector(".js-product-close"),O=t.querySelector(".js-product-background");q.addEventListener("click",()=>g(t)),O.addEventListener("click",()=>g(t)),T.useFrame(()=>t.classList.add("has-content")),y=gt(t)},Nt=({element:t})=>({open:()=>vt(t),addLoader:()=>bt(t),addContent:({id:o,data:e})=>ht({element:t,id:o,data:e}),closeOverlay:()=>g(t)}),$t=".js-overlay-product",L="OverlayProduct",ft=()=>a({componentName:L,className:$t}).map(o=>{const e={...o.dataset},r=Nt({element:o,properties:e});return i({componentName:L,element:o,properties:e,methods:r}),r});D();X();rt();tt();E();ct();pt();ft();V();G();
