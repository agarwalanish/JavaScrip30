const inputs=document.querySelectorAll('.container1 h1 input');
console.log(inputs);
inputs.forEach(input=>input.addEventListener('change', ()=>{
    console.log(input);
    console.log(`--${input.id}`,input.value,input.dataset.sizing);
    document.documentElement.style.setProperty(`--${input.id}`, input.value + input.dataset.sizing);
}));
// const inputs = document.querySelectorAll('.controls input');

// function handleUpdate() {
//   const suffix = this.dataset.sizing || '';
//   console.log(`--${this.id}`,this.value,t.dataset.sizing);
//   document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);
// }

// inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));