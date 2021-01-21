import "./assets/styles/main.scss";

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
