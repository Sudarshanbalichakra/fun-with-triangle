const inputAngles=document.querySelectorAll(".input-angle");
const checkButton=document.querySelector("#check-btn");
const output=document.querySelector("#output-box");


function calculateSum(angle1,angle2,angle3){
    const sumOfAngle=angle1+angle2+angle3;
    return sumOfAngle;
}

function isTriangle(){
    const sumOfAngle=calculateSum(
        Number(inputAngles[0].value),Number(inputAngles[1].value),Number(inputAngles[2].value)
    )
    if (sumOfAngle === 180){
        output.innerText="hey, the angle's form triangle"
    }else{
        output.innerText="sorry!!, the angle's does not form triangle"
    }
   
}



checkButton.addEventListener("click",isTriangle)