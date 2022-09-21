const sides=document.querySelectorAll(".side-line");
const checkBtn=document.querySelector("#btn");
const outputBox=document.querySelector("#output");


function calculateSumOfSides(a,b){
    const sumOfSides=a*a + b*b;
    return sumOfSides;
}



function calculatehypotenuse(){
    const sumOfSides=calculateSumOfSides(Number(sides[0].value),Number(sides[1].value))
    const lengthOfHypotenuse=Math.sqrt(sumOfSides)
    outputBox.innerText="the length of hypotenuse" + lengthOfHypotenuse;
}


checkBtn.addEventListener("click",calculatehypotenuse);
