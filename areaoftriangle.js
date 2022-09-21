const input=document.querySelectorAll(".input-value");
const checkBtn=document.querySelector("#btn");
const outputBox=document.querySelector("#output");


function calculatesum(a,b){
    const sum=a*b;
    const areaOfTrinagle=1/2*sum;
    return areaOfTrinagle;
}



function calculateareaoftriangle(){
    const sum=calculatesum(Number(input[0].value),Number(input[1].value))
    outputBox.innerText="the area of triangle is " + sum;
   
}



checkBtn.addEventListener("click",calculateareaoftriangle)

