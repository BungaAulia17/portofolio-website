/* ── TYPING EFFECT ── */
(function(){
  const el=document.getElementById('typing-text');
  const cur=document.getElementById('cursor');
  const phrases=['Seorang Desainer Kreatif ✨','Pengembang Web 💻','Pemikir Inovatif 🚀','Pemecah Masalah 💡'];
  let pi=0,ci=0,del=false;
  function tick(){
    const phrase=phrases[pi];
    if(!del){
      ci++;
      el.innerHTML=phrase.slice(0,ci);
      el.appendChild(cur);
      if(ci===phrase.length){del=true;setTimeout(tick,1800);return}
      setTimeout(tick,80);
    } else {
      ci--;
      el.innerHTML=phrase.slice(0,ci);
      el.appendChild(cur);
      if(ci===0){del=false;pi=(pi+1)%phrases.length;setTimeout(tick,400);return}
      setTimeout(tick,40);
    }
  }
  tick();
})();