document.addEventListener('change', ()=>{
    let blur=document.querySelector(`.container1 input[name="Blur"]`);
    let spacing=document.querySelector(`.container1 input[name="Spacing"]`);
    let color=document.querySelector(`.container1 input[name="Color"]`);
    const suffix =blur.dataset.sizing || '';
    console.log(blur.dataset.sizing);
   document.documentElement.style.setProperty(`--blur`, blur.value + suffix);
   document.documentElement.style.setProperty(`--spacing`, spacing.value + suffix);
   document.documentElement.style.setProperty(`--color`, color.value + suffix);
});