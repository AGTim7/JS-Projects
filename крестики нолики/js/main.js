let board = document.querySelector('.board');

function addCross(elem){
  elem.innerHTML += `<svg class='icon' width="80px" height="80px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" 
  xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet">
  <path fill="#DD2E44" d="M21.533 18.002L33.768 5.768a2.5 2.5 0 0 0-3.535-3.535L17.998 14.467L5.764 2.233a2.498 2.498 0 0 0-3.535 0a2.498 2.498 0 0 0 0 3.535l12.234 12.234L2.201 30.265a2.498 2.498 0 0 0 1.768 4.267c.64 0 1.28-.244 1.768-.732l12.262-12.263l12.234 12.234a2.493 2.493 0 0 0 1.768.732a2.5 2.5 0 0 0 1.768-4.267L21.533 18.002z">
  </path></svg>`;
}
function addElipse(elem){
  elem.innerHTML += `<svg class='icon' width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="40" cy="40" r="35" stroke="#0085FF" stroke-width="10"/>
  </svg>
  `;
}
function checkWin(elem){
  elem = elem.map(item => Number(item))
  if(elem.length>2){
    for(let i = 0;i < winCombo.length;i++){
      if(elem.includes(winCombo[i][0]) &&
      elem.includes(winCombo[i][1]) &&
      elem.includes(winCombo[i][2])){
        return true;
        restart()
      }else
      if(elem.length == 5 &&
        !elem.includes(winCombo[i][0]) &&
      elem.includes(winCombo[i][1]) &&
      elem.includes(winCombo[i][2])
      ){
        setTimeout(draft,100)
        break
      }
    }
  }
  console.log(elem)
}
function restart(){
  cell.forEach(elem=>{
    elem.innerHTML = ''
  })
  game.cross = []
  game.elipse = []
  step = 'x'
}
function draft(){
  alert('ничья')
  restart()
}
const winCombo = [
  [1,5,9],
  [3,5,7],
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9]
]
let step = 'x'
let game={
  cross:[],
  elipse:[]
}
for(let i = 1;i<=9;i++){
  board.innerHTML += `<div class="cell" data-pos=${i}></div>`
}
let cell = document.querySelectorAll('.cell')


cell.forEach(elem=>{
  elem.addEventListener('click',event=>{
    if(step == 'x' && elem.innerHTML == ''){
      addCross(elem)
      step = '0'
      game.cross.push(elem.dataset.pos)
      if(checkWin(game.cross)){
        setTimeout("alert('крест')", 100)
        setTimeout(restart, 200)
      }
    }else if(step == '0' && elem.innerHTML == ''){
      addElipse(elem)
      step = 'x'
      game.elipse.push(elem.dataset.pos)
      if(checkWin(game.elipse)){
        setTimeout("alert('нолик')", 100)
        setTimeout(restart, 200)
      }
    }
  })
})