import './assets/styles/main.scss';

/*
=============
  INTER OBS
=============
*/

const obs = new IntersectionObserver(
	(items, obs) => {
		items.forEach((item) => {
			if (item.intersectionRatio) {
				item.target.classList.add('slide-up');
				obs.unobserve(item.target);
			}
		});
	},
	{
		rootMargin: '0px 0px -200px 0px'
	}
);

let items = document.querySelectorAll('.obs');
items.forEach((item) => {
	obs.observe(item);
});

/*
=============
  PARALLAX MOUSE
=============
*/

const section = document.querySelector('.bg-perspective');
const cards = document.querySelector('.pers-card');
const width = window.innerWidth;
const height = window.innerHeight;

addEventListener('mousemove', (e) => {
	const { clientX, clientY } = e;

	let pourcentX = clientX / width - 0.5;
	let pourcentY = clientY / height - 0.5;

	section.style.transform = `rotateX(${Math.min(
		-30 * pourcentY,
		12
	)}deg) rotateY(${Math.min(30 * pourcentX, 12)}deg)`;

	cards.style.transform = `rotateX(${-30 * pourcentY}deg) rotateY(${Math.min(
		30 * pourcentX,
		12
	)}deg)`;

	const heroBackground = document.querySelector('.bg-circles');
	heroBackground.children[1].setAttribute('cx', clientX / 3 + 600);
	heroBackground.children[2].setAttribute('cx', clientX / 10 + 230);
	heroBackground.children[3].setAttribute('cx', clientX / 10 + 1920);
	heroBackground.children[3].setAttribute('cy', clientY / 10 + 200);
});

/*
=============
  ANIM LOGO
=============
*/

const logoBtn = document.querySelector('#logo');
const svgLogo = document.querySelector('#shapeLogo');
const pathLogo = document.querySelector('#Swoome');

logoBtn.addEventListener('mouseenter', (e) => {
	pathLogo.classList.remove('animLogoPath');
	svgLogo.classList.remove('animLogoScale');

	setTimeout(() => {
		pathLogo.classList.add('animLogoPath');
		svgLogo.classList.add('animLogoScale');
	}, 10);
});
