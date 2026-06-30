/* ── FALLING HEARTS & STARS ── */
(function(){
  const layer=document.getElementById('magic-layer');
  const items=['❤️','💕','✨','⭐','🌸','💖','💗','💓','🌟','💫','🩷','🌺'];
  function spawn(){
    const el=document.createElement('div');
    el.className='magic-item';
    el.textContent=items[Math.floor(Math.random()*items.length)];
    const size=Math.random()*18+12;
    el.style.cssText=`
      left:${Math.random()*100}%;
      font-size:${size}px;
      animation-duration:${Math.random()*8+6}s;
      animation-delay:${Math.random()*4}s;
      filter:drop-shadow(0 0 4px rgba(255,80,140,.5));
    `;
    layer.appendChild(el);
    el.addEventListener('animationend',()=>el.remove());
  }
  for(let i=0;i<22;i++)spawn();
  setInterval(spawn,900);
})();