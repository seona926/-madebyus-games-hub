const grid=document.querySelector('#gameGrid');
const cards=[...grid.querySelectorAll('.game-card')];
if(cards.length>=5)grid.classList.add('compact-grid');

if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
  addEventListener('pointermove',event=>{
    document.documentElement.style.setProperty('--mouse-x',`${event.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y',`${event.clientY}px`);
  },{passive:true});
}
