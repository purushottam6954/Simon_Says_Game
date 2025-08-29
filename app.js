let gameSeq=[];
let userSeq=[];
let level=0;
let h2=document.querySelector("h2");
let colors=["red","yellow","green","blue"];

let started=false;
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is Started");
        started=true;

      levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}

function levelUp(){
    level++;
    h2.innerText=`level ${level}`;

    //choose random btn
    let randInt=Math.floor(Math.random()*3);
    let randColor=colors[randInt];
    let randBtn=document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
}