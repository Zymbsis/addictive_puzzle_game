import{S as m}from"./vendor-e0c5843a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const b=document.querySelector(".header-nav-list"),h=document.querySelector(".header");window.addEventListener("load",L);b.addEventListener("click",u);function u(e){if(e.target===e.currentTarget)return;const t=e.target.nodeName==="A"?e.target.getAttribute("href"):e.target.firstElementChild.getAttribute("href");if(location.href.includes("privacy_policy")||location.href.includes("term_of_use")){localStorage.setItem("elementId",t),location.href="./index.html";return}e.preventDefault(),v(t)}function v(e){const n=document.querySelector(e).getBoundingClientRect().top,r=h.offsetHeight,i=n+window.scrollY-r;window.scrollTo({top:i,behavior:"smooth"}),localStorage.getItem("elementId")&&localStorage.setItem("elementId","")}function L(){if(!localStorage.getItem("elementId"))return;const e=localStorage.getItem("elementId");v(e)}const o=document.querySelector(".open-menu"),c=document.querySelector(".close-menu"),d=document.querySelector(".burger-menu"),f=document.querySelector(".burger-menu-nav-list");o.addEventListener("click",w);function w(){d.classList.add("visible"),o.classList.add("hidden"),c.classList.add("visible"),f.addEventListener("click",u),c.addEventListener("click",l),document.addEventListener("keydown",l),document.addEventListener("click",l),window.addEventListener("resize",l)}function l(e){e.code&&e.code!=="Escape"||e.target===o||e.target===d||(d.classList.remove("visible"),o.classList.remove("hidden"),c.classList.remove("visible"),f.removeEventListener("click",u),document.removeEventListener("keydown",l),document.removeEventListener("click",l),window.removeEventListener("resize",l),c.removeEventListener("click",l))}new m(".gallery-swiper",{direction:"horizontal",centeredSlides:!0,initialSlide:0,slidesPerView:1,spaceBetween:16,speed:400,breakpoints:{1440:{centeredSlides:!1,initialSlide:0,slidesPerView:2,slidesPerGroup:2,spaceBetween:56}},on:{slideChange:e=>{S(e),p(e)}},navigation:{prevEl:".prev-img-btn",nextEl:".next-img-btn"}});function S(e){const t=document.querySelector(".next-img-btn").classList;window.innerWidth>=1440&&(e.activeIndex===4?(e.allowSlideNext=!1,t.add("swiper-button-disabled")):(e.allowSlideNext=!0,t.remove("swiper-button-disabled")))}function p(e){const t=document.querySelector(".gallery-pagination-bullet").classList;e.activeIndex===0?t.remove("last-slide-active","slide-active"):window.innerWidth<1440&&e.activeIndex===e.slides.length-1||window.innerWidth>=1440&&e.activeIndex===4?(t.add("last-slide-active"),t.remove("slide-active")):(t.add("slide-active"),t.remove("next-slide-active"))}const g=document.querySelectorAll(".faq-item");g.forEach(e=>e.addEventListener("click",y));function y(e){const t=e.currentTarget,n=[...g].find(r=>r.classList.contains("show-answer"));n?(n===t||t.classList.add("show-answer"),n.classList.remove("show-answer")):t.classList.add("show-answer")}const E=document.querySelectorAll("p[data-number]");E.forEach((e,t)=>{let n;switch(t){case 0:n="#db403b";break;case 1:n="#fe4c64";break;case 2:n="#eb65a0";break;case 3:n="#7b70f2";break;case 4:n="#fa6900";break;case 5:n=" #28abe3";break;case 6:n="#5bb02f";break;case 7:n="#1bc088";break}e.style.setProperty("--bg-color",n)});new m(".review-swiper",{direction:"horizontal",centeredSlides:!0,initialSlide:1,slidesPerView:1,spaceBetween:34,speed:400,breakpoints:{1440:{initialSlide:2,slidesPerView:1,spaceBetween:40}},on:{slideChange:e=>{x(e),I(e)},init:e=>{var t,n;(n=(t=e.slides[e.realIndex+1])==null?void 0:t.nextElementSibling)==null||n.classList.add("right-rotate")}},navigation:{prevEl:".prev-review",nextEl:".next-review"}});function x(e){var t,n,r,i;(n=(t=e.slides[e.realIndex+1])==null?void 0:t.nextElementSibling)==null||n.classList.add("right-rotate"),(i=(r=e.slides[e.realIndex-1])==null?void 0:r.previousElementSibling)==null||i.classList.add("left-rotate"),e.slides[e.realIndex].classList.remove("right-rotate","left-rotate")}function I(e){const t=document.querySelector(".review-pagination-bullet").classList;e.activeIndex===0?t.remove("last-slide-active","slide-active"):e.activeIndex===e.slides.length-1?(t.add("last-slide-active"),t.remove("slide-active")):(t.add("slide-active"),t.remove("next-slide-active"))}
//# sourceMappingURL=main-afd0b536.js.map
