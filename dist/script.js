const grid=document.querySelector('#gameGrid');
const cards=[...grid.querySelectorAll('.game-card')];

const shuffled=[...cards];
for(let index=shuffled.length-1;index>0;index-=1){
  const randomIndex=Math.floor(Math.random()*(index+1));
  [shuffled[index],shuffled[randomIndex]]=[shuffled[randomIndex],shuffled[index]];
}

const orderKey='madebyus-game-order';
try{
  const previousOrder=JSON.parse(localStorage.getItem(orderKey)??'[]');
  const repeated=previousOrder.length===shuffled.length&&shuffled.every((card,index)=>card.href===previousOrder[index]);
  if(repeated&&shuffled.length>1)[shuffled[0],shuffled[1]]=[shuffled[1],shuffled[0]];
  localStorage.setItem(orderKey,JSON.stringify(shuffled.map(card=>card.href)));
}catch{}

shuffled.forEach((card,index)=>{
  card.querySelector('.game-number').textContent=String(index+1).padStart(2,'0');
  grid.append(card);
});

if(cards.length>=5)grid.classList.add('compact-grid');

if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
  addEventListener('pointermove',event=>{
    document.documentElement.style.setProperty('--mouse-x',`${event.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y',`${event.clientY}px`);
  },{passive:true});
}
