let color=()=>{
    document.querySelector('#colorShifter').style.backgroundColor='#'
    +Math.floor(Math.random()*16777215).toString(16);
  }
  let shape=()=>{
    let val1= Math.floor(Math.random(0,100)*100);
    let val2=Math.floor(Math.random(-360,360)*360);
    let val3=Math.floor(Math.random(-360,360)*360);
    document.querySelector('#shapeShifter').style.borderRadius=`${val1}px`;
    document.querySelector('#shapeShifter').style.transform=`skew(${val2}deg,${val3}deg)`;
    }
document.getElementById('colorChange').addEventListener('click',color);
document.getElementById('shapeChange').addEventListener('click',shape);

 