const panel=document.querySelectorAll('.panel');
console.log(panel);
console.log(1);
panel.forEach(item=>item.addEventListener('click',()=>{
    item.classList.toggle('open-active')
}));
