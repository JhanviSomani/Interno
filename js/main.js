const navTriggerBtn = document.querySelector("#nav_trigger_btn");
const navMenu = document.querySelector("#nav-menu");

// event-listener

navTriggerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-is-open");
});

// swiper

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: "3000",
  delay: "300",
  //reset: true,
});

//hero

sr.reveal(".hero__text", { origin: "top", delay: "300" });

//steps

sr.reveal(".steps__step", { distance: "100px", interval: 80, delay: "300" });

//about

sr.reveal(".about__text", { origin: "left" });
sr.reveal(".about__img", { origin: "right", delay: 300 });

//testimonial

sr.reveal(".testimonial__bg", { delay: "300" });
sr.reveal(".testimonial__title");
sr.reveal(".testimonial__slider", { delay: "300" });

//brands

sr.reveal(".brands__img", { delay: "300", distance: "100px", interval: 80 });

//work

sr.reveal(".work__title");
sr.reveal(".work__subtitle", { delay: 300 });
sr.reveal(".work__grid", { delay: 300 });

//stats

sr.reveal(".stats");
sr.reveal(".stats__item", {
  distance: "100px",
  interval: "80",
});

//news

sr.reveal(".news__title");
sr.reveal(".news__subtitle", {
  delay: "300",
});
sr.reveal(".news__item", {
  distance: "100px",
  interval: 100,
  delay: 300,
});

//contact

sr.reveal(".contact__container");
sr.reveal(".contact__text", { delay: "300" });

//footer

sr.reveal(".footer__item", {
  distance: "100px",
  interval: 80,
});

sr.reveal(".footer__copyright");
