/* ── GLITTER CURSOR TRAIL ── */
(function(){
  const emojis=['✨','💖','⭐','🌸','💫'];
  document.addEventListener('mousemove',e=>{
    if(Math.random()>.75){
      const dot=document.createElement('div');
      dot.className='cursor-dot';
      dot.style.cssText=`left:${e.clientX-4}px;top:${e.clientY-4}px`;
      if(Math.random()>.6){
        dot.style.background='none';
        dot.style.fontSize='14px';
        dot.style.width='auto';dot.style.height='auto';
        dot.textContent=emojis[Math.floor(Math.random()*emojis.length)];
      }
      document.body.appendChild(dot);
      setTimeout(()=>dot.remove(),800);
    }
  });
})();