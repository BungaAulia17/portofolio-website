/* ── NAV ── */
const nav=document.getElementById('mainNav');
const ham=document.getElementById('hamburger');
const navLinks=document.getElementById('navLinks');
window.addEventListener('scroll',()=>{
  nav.style.padding=window.scrollY>60?'.8rem 5vw':'1.1rem 5vw';
  nav.classList.toggle('scrolled',window.scrollY>60);
});
ham.addEventListener('click',()=>navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));