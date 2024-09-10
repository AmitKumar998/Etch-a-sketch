let color="black"
let click=false;
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("body").addEventListener("click",function(e){
        if(e.target.tagName!="BUTTON"){
            click=!click;
            let draw=document.querySelector("#draw");
            if(click){
                draw.innerHTML="Now you can draw";
            }else{
                draw.innerHTML="Pen on hold click anywhere to start drawing";
            }
        }
    })
    createBoard(32);
    let btn_popup=document.querySelector("#popup");
    btn_popup.addEventListener("click",function(){
        let size=getSize();
        createBoard(size);
    })
})
function createBoard(size){
    let board=document.querySelector(".board");
    board.style.gridTemplateColumns=`repeat(${size},1fr)`;
    board.style.gridTemplateRows=`repeat(${size},1fr)`; 
    let numDivs=size*size;
    for(let i=0;i<numDivs;i++){
        let div=document.createElement("div");
        div.addEventListener("mouseover",colorDiv);
        board.insertAdjacentElement("beforeend",div);
    }
}
function getSize(){
    let input=prompt("what will be the size of your board?");
    let message=document.querySelector("#message");
    if(input==""){
        message.innerHTML="Please provide a number";
    }else if(input<1||input>100){
        message.innerHTML="Provide a number between 1 & 100";
    }else{
        message.innerHTML="Now you play";
        return input;
    }
}
function colorDiv(){
    if(click){
        if(color=="random"){
            this.style.backgroundColor='#' + Math.floor(Math.random()*16777215).toString(16);
        }else{
            this.style.backgroundColor='black';
        }
    }
}
function setColor(colorChoice){
    color=colorChoice;
}
function resetBoard(){
    let divs=document.querySelectorAll("div");
    divs.forEach((div)=>div.style.backgroundColor='white');
}