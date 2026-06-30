/* ── SCROLL REVEAL ── */
(function(){
  const els=document.querySelectorAll('.reveal,.reveal-left,.reveal-right');
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}
    });
  },{threshold:.1,rootMargin:'0px 0px -40px 0px'});
  els.forEach(el=>obs.observe(el));
})();