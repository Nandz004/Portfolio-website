// =====================
// MOBILE MENU
// =====================


const menuBtn = document.querySelector('.menu-btn i.fa-bars');

const navLinks = document.querySelector(".nav-links");


menuBtn.onclick = ()=>{

    navLinks.classList.toggle("active");

};




// =====================
// DARK MODE
// =====================


const themeBtn=document.querySelector(".theme-btn");


themeBtn.onclick=()=>{


document.body.classList.toggle("light");


if(document.body.classList.contains("light")){

themeBtn.innerHTML=
'<i class="fas fa-sun"></i>';

}

else{

themeBtn.innerHTML=
'<i class="fas fa-moon"></i>';

}


};




// =====================
// LOADER REMOVE
// =====================


window.onload=()=>{

document.querySelector(".loader")
.style.display="none";

};




// =====================
// TYPING EFFECT
// =====================


const text=[

"Frontend Developer",

"UI Designer",

"Web Developer"

];


let index=0;

let char=0;


function typing(){


if(char < text[index].length){

document.querySelector(".typing")
.innerHTML += text[index].charAt(char);

char++;

setTimeout(typing,120);

}

else{


setTimeout(()=>{

document.querySelector(".typing")
.innerHTML="";

char=0;

index=(index+1)%text.length;

typing();


},1500);


}


}


typing();




// =====================
// SCROLL REVEAL
// =====================


window.addEventListener("scroll",()=>{


let reveals=document.querySelectorAll(".reveal");


reveals.forEach((item)=>{


let windowHeight=window.innerHeight;

let top=item.getBoundingClientRect().top;


if(top < windowHeight-100){

item.classList.add("active");

}


});


});
const search = document.getElementById("search");

search.addEventListener("input", function(){

    const value = search.value.toLowerCase();

    document.querySelectorAll(".project-card").forEach(card=>{

        card.style.display =
        card.textContent.toLowerCase().includes(value)
        ? "block"
        : "none";

    });

});
localStorage.setItem("theme","dark");

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

topBtn.style.display =
window.scrollY > 300 ? "block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
window.addEventListener("scroll",()=>{

// highlight current section

});
// Fade in the about image when it enters the viewport
const aboutImg = document.querySelector('.about-img');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate only once
    }
  });
}, { threshold: 0.2 });

if (aboutImg) {
  observer.observe(aboutImg);
                       }
