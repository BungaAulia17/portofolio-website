/* ── CARD TILT ── */
document.querySelectorAll('.cert-card,.project-card').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`translateY(-8px) rotateX(${-y*6}deg) rotateY(${x*6}deg)`;
    card.style.transformStyle='preserve-3d';
  });
  card.addEventListener('mouseleave',()=>{
    card.style.transform='';
    card.style.transformStyle='';
  });
});