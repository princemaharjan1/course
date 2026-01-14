const bg = document.querySelector(".bg");
const mid = document.querySelector(".mid");
const fg = document.querySelector(".fg");
const parallaxText = document.querySelector('.parallax h1');

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  bg.style.transform = `translate3d(${scrolled * 0.40}px, 0, 0)`;
  mid.style.transform = `translate3d(${scrolled * -1.55}px, 0, 0)`;
  fg.style.transform = `translate3d(${scrolled * 3.00}px, 0, 0)`;
  parallaxText.style.transform = `translate3d(${scrolled * 4.00}px, 0, 0)`;
});

