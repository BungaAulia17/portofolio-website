/* ── SKILL BARS ── */
(function(){
  const bars=document.querySelectorAll('.skill-fill');
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.style.width=e.target.dataset.w+'%';obs.unobserve(e.target)}
    });
  },{threshold:.3});
  bars.forEach(b=>obs.observe(b));
})();