const plus = document.querySelector('.fa-plus')
const minus = document.querySelector('.fa-minus')
let num = document.querySelector('.text')
let k = 0
plus.addEventListener('click', event =>{
  k += 1
  num.innerHTML = k
})
minus.addEventListener('click', event =>{
  if(k > 0){
  k -= 1
  num.innerHTML = k
  }
})