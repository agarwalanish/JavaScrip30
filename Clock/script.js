function setDate(){
    const date=new Date();
    let seconds=date.getSeconds();
    let minutes=date.getMinutes();
    let hours=date.getHours();
    const sh=document.getElementsByClassName("seconds");
    const mh=document.getElementsByClassName("minutes");
    const hh=document.getElementsByClassName("hours");
    console.log(seconds);
    if(seconds==0)
     console.log(minutes);
    if(minutes==0)
      console.log(hours);
    seconds=((seconds/60)*360)+90;
    minutes=((minutes/60)*360)+90;
    hours=((hours/12)*360)+90;
    sh[0].style.transform = `rotate(${seconds}deg)`;
    mh[0].style.transform = `rotate(${minutes}deg)`;
    hh[0].style.transform = `rotate(${hours}deg)`;
}
setInterval(setDate,1000);