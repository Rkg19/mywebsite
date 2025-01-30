const menu = document.querySelector('.navbar');
const logo = document.querySelector('.navlogo');
const cancel = document.querySelector('i');

logo.addEventListener('click',()=>{
  menu.style.display = 'block';
  cancel.style.display = 'block';
  logo.style.display = 'none';
})

cancel.addEventListener('click',()=>{
  menu.style.display = 'none';
  cancel.style.display = 'none';
  logo.style.display = 'block';

  
})