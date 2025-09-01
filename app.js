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

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },700);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    //choose random btn
    let randInt=Math.floor(Math.random()*3);
    let randColor=colors[randInt];
    let randBtn=document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },1000)
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp(),1000);
        }
        // console.log("Same value");
    }else{
        let body=document.querySelector("body");
        body.classList.add("gameOver");
        h2.innerHTML=`Game Over! Your score was ${level}<br>Press any key to Start`;
        setTimeout(function(){
            body.classList.remove("gameOver");
        },400);
        reset(); 
    }
}

function btnPress(){
    // console.log(this);
    let btn=this;
   userFlash(btn);
   let userColor=btn.getAttribute("id");
//    console.log(userColor);
   userSeq.push(userColor);
//    console.log(userSeq);
   checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSequence=[];
    
}