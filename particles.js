/* ── PARTICLES (enhanced) ── */
(function(){
  const c=document.getElementById('particles'),ctx=c.getContext('2d');
  let W,H,pts=[];
  const colors=['rgba(224,48,106,','rgba(249,100,160,','rgba(255,140,190,','rgba(240,70,130,','rgba(255,80,140,'];
  function resize(){W=c.width=window.innerWidth;H=c.height=window.innerHeight}
  function mkPt(){
    return{
      x:Math.random()*W,y:Math.random()*H,
      r:Math.random()*4+1,
      dx:(Math.random()-.5)*.5,dy:(Math.random()-.5)*.5,
      col:colors[Math.floor(Math.random()*colors.length)],
      a:Math.random()*.6+.15,
      shape:Math.random()<.4?'star':Math.random()<.5?'heart':'circle',
      spin:Math.random()*Math.PI*2,spinSpeed:(Math.random()-.5)*.02,
      pulse:Math.random()*Math.PI*2,pulseSpeed:Math.random()*.04+.01
    }
  }
  function drawStar(cx,cy,r,col,a,angle){
    ctx.save();ctx.translate(cx,cy);ctx.rotate(angle);
    ctx.beginPath();
    for(let i=0;i<5;i++){
      ctx.lineTo(Math.cos((18+i*72)*Math.PI/180)*r,Math.sin((18+i*72)*Math.PI/180)*r);
      ctx.lineTo(Math.cos((54+i*72)*Math.PI/180)*r*.4,Math.sin((54+i*72)*Math.PI/180)*r*.4);
    }
    ctx.closePath();
    ctx.fillStyle=col+a+')';
    ctx.shadowColor='rgba(255,80,140,.5)';ctx.shadowBlur=r*2;
    ctx.fill();ctx.restore();
  }
  function drawHeart(cx,cy,r,col,a){
    ctx.save();ctx.translate(cx,cy);
    ctx.beginPath();
    ctx.moveTo(0,-r*.5);
    ctx.bezierCurveTo(r*.6,-r*1.2,r*1.4,r*.2,0,r);
    ctx.bezierCurveTo(-r*1.4,r*.2,-r*.6,-r*1.2,0,-r*.5);
    ctx.closePath();
    ctx.fillStyle=col+a+')';
    ctx.shadowColor='rgba(255,80,140,.4)';ctx.shadowBlur=r*1.5;
    ctx.fill();ctx.restore();
  }
  function loop(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{
      p.x+=p.dx;p.y+=p.dy;
      p.spin+=p.spinSpeed;
      p.pulse+=p.pulseSpeed;
      const pr=p.r*(1+Math.sin(p.pulse)*.2);
      if(p.x<0||p.x>W)p.dx*=-1;
      if(p.y<0||p.y>H)p.dy*=-1;
      if(p.shape==='star')drawStar(p.x,p.y,pr*2.5,p.col,p.a,p.spin);
      else if(p.shape==='heart')drawHeart(p.x,p.y,pr*2,p.col,p.a);
      else{
        ctx.beginPath();ctx.arc(p.x,p.y,pr,0,Math.PI*2);
        ctx.fillStyle=p.col+p.a+')';
        ctx.shadowColor='rgba(255,100,160,.3)';ctx.shadowBlur=pr*2;
        ctx.fill();
      }
    });
    requestAnimationFrame(loop);
  }
  resize();window.addEventListener('resize',resize);
  for(let i=0;i<80;i++)pts.push(mkPt());
  loop();
})();