'use strict';

// navbar Event
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (navbarHeight < window.scrollY) {
    navbar.classList.add('navbar__dark');
  } else {
    navbar.classList.remove('navbar__dark');
  }
});

// scrollIntoView Event
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  const el = document.querySelector(link);
  el.scrollIntoView({ behavior: 'smooth' });
});

// home button Event
const homeButton = document.querySelector('.home__button');
homeButton.addEventListener('click', (event) => {
  const target = event.target.dataset.link;
  const el = document.querySelector(target);
  el.scrollIntoView({ behavior: 'smooth' });
});

// project filter Event
const projects = document.querySelectorAll('.project');
const projectButtons = document.querySelector('.project__buttons');
projectButtons.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter;
  projects.forEach((project) => {
    if (filter !== project.dataset.type) {
      project.classList.add('visible');
    } else {
      project.classList.remove('visible');
    }
    if (filter === '*') {
      project.classList.remove('visible');
    }
  });
});

// arrow button Event
const arrowButton = document.querySelector('.arrow-up');
arrowButton.addEventListener('click', (event) => {
  const target = event.target.dataset.link;
  const el = document.querySelector(target);
  el.scrollIntoView({ behavior: 'smooth' });
});

// arrow button Visible Event
const about = document.querySelector('#about');
const aboutHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (aboutHeight < window.scrollY) {
    arrowButton.classList.add('visible');
  } else {
    arrowButton.classList.remove('visible');
  }
});
