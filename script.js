const header=document.getElementById('header');
window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',window.scrollY>20)});

const burger=document.getElementById('burger');
const nav=document.querySelector('.nav-links');
if(burger && nav){
  burger.addEventListener('click',()=>{
    if(nav.style.display==='flex'){ nav.style.display='none'; }
    else{
      nav.style.display='flex';
      nav.style.position='absolute';
      nav.style.top='64px';
      nav.style.right='12px';
      nav.style.flexDirection='column';
      nav.style.background='white';
      nav.style.padding='16px';
      nav.style.borderRadius='16px';
      nav.style.boxShadow='0 12px 30px rgba(0,0,0,0.08)';
      nav.style.border='1px solid #E9ECF2';
      nav.style.gap='12px';
    }
  });
}

document.querySelectorAll('.faq-item .faq-q').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item=btn.parentElement;
    document.querySelectorAll('.faq-item').forEach(i=>{if(i!==item) i.classList.remove('open')});
    item.classList.toggle('open');
  });
});

const stats=document.querySelectorAll('.stat strong');
if(stats.length){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const el=e.target, text=el.innerText, hasPct=text.includes('%'), target=parseInt(text);
        let n=0;
        const timer=setInterval(()=>{
          n+=Math.ceil(target/30);
          if(n>=target){ n=target; clearInterval(timer); }
          el.innerText=n+(hasPct?'%':'');
        },22);
        obs.unobserve(el);
      }
    });
  },{threshold:0.6});
  stats.forEach(s=>obs.observe(s));
}