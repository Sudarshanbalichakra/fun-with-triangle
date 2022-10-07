const quizForm=document.querySelector(".quiz-form");
const submitButton=document.querySelector("#btn");
const outputBox=document.querySelector("#output");

const correctAnwser=["90°","right trinagle","equilateral triangle","true","√3/4 a2"];


function calculatescore(){
    let score=0;
    let index=0;
   const formResult= new FormData(quizForm);
   for (let value of formResult.values()){
    if(value===correctAnwser[index]){
        score=score+1;
    }
    index=index+1;
   }
   outputBox.innerText="your score is" + score;
}









submitButton.addEventListener("click", calculatescore)

