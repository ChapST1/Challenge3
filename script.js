let menu = document.getElementById("btn");
menu.addEventListener('click', ()=>{
  let bars = document.getElementById("barras");
  bars.classList.toggle("active");
});
//info
let mas = document.getElementById("more");
mas.addEventListener('click',()=>{
  let infor = document.getElementById("info");
  infor.classList.toggle("descripcionActive");
})

//votos
let corazon = document.getElementById("heart");
corazon.addEventListener('click',()=>{
  corazon.classList.toggle("fa-heart-active");
})

let corazonRoto = document.getElementById("heartBroken");
corazonRoto.addEventListener('click',()=>{
  corazonRoto.classList.toggle("fa-heart-broken-active");
})

