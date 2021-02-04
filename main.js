import "./assets/styles/main.scss";

/*
=============
  INTER OBS
=============
*/

const obs = new IntersectionObserver(
  (obserables) => {
    obserables.forEach((item) => {
      if (item.intersectionRatio > 0.5) {
        item.target.classList.remove("not-visible");
        obs.unobserve(item.target);
      }
    });
  },
  {
    threshold: [0.5],
  }
);

let items = document.querySelector(".obs");
items.forEach((item) => {
  item.classList.add("not-visible");
  obs.observe(item);
});

/*
=============
  PARALLAX MOUSE
=============
*/

const section = document.querySelector(".bg-perspective");
const cards = document.querySelector(".pers-card");
const width = window.innerWidth;
const height = window.innerHeight;

addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;

  let pourcentX = clientX / width - 0.5;
  let pourcentY = clientY / height - 0.5;

  section.style.transform = `rotateX(${Math.min(
    30 * pourcentY,
    12
  )}deg) rotateY(${Math.min(30 * pourcentX, 12)}deg)`;

  cards.style.transform = `rotateX(${30 * pourcentY}deg) rotateY(${Math.min(
    30 * pourcentX,
    12
  )}deg)`;
});

/*
=============
  ANIM LOGO
=============
*/

const logoBtn = document.querySelector("#logo");
const svgLogo = document.querySelector("#shapeLogo");
const pathLogo = document.querySelector("#Swoome");

logoBtn.addEventListener("mouseenter", (e) => {
  pathLogo.classList.remove("animLogoPath");
  svgLogo.classList.remove("animLogoScale");

  setTimeout(() => {
    pathLogo.classList.add("animLogoPath");
    svgLogo.classList.add("animLogoScale");
  }, 10);
});
