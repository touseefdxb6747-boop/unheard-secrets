const searchIcon = document.querySelector('.fa-search');
const searchPopup = document.querySelector('.search-popup');
const closeSearch = document.querySelector('.close-search');
const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('nav');
const navRight = document.querySelector('.nav-right');

searchIcon.addEventListener('click', () => {
  searchPopup.classList.add('active');
});

closeSearch.addEventListener('click', () => {
  searchPopup.classList.remove('active');
});

mobileToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  navRight.classList.toggle('active');
});
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if(window.scrollY > 500){
    backToTop.classList.add('show');
  }else{
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
});
