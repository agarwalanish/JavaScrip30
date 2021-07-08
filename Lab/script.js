const submit=document.querySelector("#submit");
let a=[];
let str="";
submit.addEventListener('click',(e)=>{
    
    e.preventDefault();
    const fname=document.querySelector("#fname");
    const lname=document.querySelector("#lname");
    const item=document.querySelector("#Item");
    const description=document.querySelector("#Description");
    if(fname.value!=""||lname.value!=""||item.value!=""||description.value!=""){
        submit.style.backgroundColor="green";
    let o={
        fname:fname.value,
        lname:lname.value,
        item:item.value,
        description:description.value
    }
    // document.querySelector("p").innerHTML= str;
    str="";
    a.push(o);
    document.forms[0].reset();
    // console.log(a);
    let c=0;
    setTimeout(()=>{
    a.forEach(i=>{ c++;
        str=str+"<span>"+c+"<br>"+"Fname "+":"+i.fname+"<br>"+
        "Lname "+":"+i.lname+"<br>"+
        "Item "+":"+i.item+"<br>"+
        "Description "+":"+i.description+"</span>"
        console.log(i);
        document.querySelector("#para").innerHTML=str;
    })
    
        submit.style.backgroundColor="blue";
    },500);
    }
});
// console.log(a);
// document.querySelector("p").innerHTML= str;