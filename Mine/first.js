const button = document.querySelector("button");
const body=document.querySelector("body");
const color=['red','green','pink','grey','blue'];
body.style.background= "white";

button.addEventListener('click',changeB);
function changeB()
{
    const colorIndex=parseInt(Math.random()*color.length);
    console.log(colorIndex);
    body.style.background=color[colorIndex];
}