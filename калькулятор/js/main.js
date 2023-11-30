let buttons = document.querySelectorAll('.calc-button')
let input = document.getElementById('input')
let clear = document.getElementById('clear')
let backs = document.getElementById('delete')
let equal = document.getElementById('equal')
buttons.forEach(elem =>{
  elem.addEventListener('click', () =>{
    if(!['%', '/', '*', '+', '-', '.', '**'].includes(elem.value)
    || !['%', '/', '*', '+', '-', undefined].includes(input.value[input.value.length-1])){
      input.value += elem.value
    }
  })
})
clear.addEventListener('click', () =>{
  input.value = ''
})
backs.addEventListener('click', () =>{
  input.value = input.value.slice(0, -1)
})
equal.addEventListener('click', () =>{
  if(input.value != 0) input.value = eval(input.value).toFixed(14)/1
})