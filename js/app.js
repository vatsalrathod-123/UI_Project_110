//? Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

//? Nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

//? Swiper Slider
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3500,
  },
});

//? counter design
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 1287, 3000);
  counter("count2", 100, 5768, 2500);
  counter("count3", 0, 2160, 3000);
  counter("count4", 0, 4360, 3000);
});

//? Our Partner
var swiper = new Swiper(".our-partner", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    991: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
  },
});

//? Cursor Move
let main = document.querySelector("body");
let cursor = document.querySelector(".cursor");
let image = document.querySelector("#image");

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1,
    ease: "back.out",
  });
});

let t1 = gsap.timeline();
t1.from(".logo", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});
t1.from("li", {
  y: -30,
  opacity: 0,
  duration: 1,
  // delay: 0.5,
  stagger: 0.3,
});
// t1.from("h1", {
//   y: 20,
//   opacity: 0,
//   duration: 0.5,
//   scale: 0.2,
// });
