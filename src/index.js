/******************************************
 *  Author : Mhande Amalou   
 *  Created On : Tue Jul 19 2022
 *  File : index.js
 *******************************************/

 import "./sass/style.scss";


const primaryNav = document.querySelector(".primary-navigation");
const menuBtn = document.querySelector(".mobile-nav-toggle");


menuBtn.addEventListener("click", (e) => {
    const visibility = primaryNav.getAttribute("data-visible");

   console.log();
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        menuBtn.setAttribute("aria-expanded",true);
    } else {
        primaryNav.setAttribute("data-visible", false);
        menuBtn.setAttribute("aria-expanded",false);
        
    }
});