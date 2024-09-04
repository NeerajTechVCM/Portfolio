let gameSeq = [];
let userSeq = [];
let level = 0;
let started = false;
let color = ["yellow", "green", "red", "purple"];
let span=document.querySelector("span");
let start=document.getElementById("start");
let background=new Audio("music.mp3");
let allBtns = document.querySelectorAll(".btn");
let flash=new Audio("move.mp3");
let highScore=0;
function btndisable(){
    for (btn of allBtns) {
 
        btn.disabled=true;
    
    };
}
btndisable();
start.addEventListener("click", () => {
    for (btn of allBtns) {
 
        btn.addEventListener("click", btnpress);

};
    if (started == false) {
        console.log("game started");
       
        background.play();
     
        started = true;
        levelup();
    }

});


let h2 = document.querySelector("h2");
const levelup = () => {
    userSeq=[];
    level++;
   

    h2.innerText = `Level:${level}`;
    console.log(level);
    let randomIdx = Math.floor(Math.random() * 4);

    let randomColor = color[randomIdx];
gameSeq.push(randomColor);
console.log(gameSeq);
    let randomBtn = document.querySelector(`.${randomColor}`);
    showHighScore();
    gameflash(randomBtn);

}
function gameflash(btn) {
    btn.classList.add("gameflash");
 
    flash.play();
    setTimeout(function () {
        btn.classList.remove("gameflash");
        flash.pause();
    }, 250);
};
function userflash(btn) {
    btn.classList.add("userflash");
    let user=new Audio("user.mp3");
    flash.play();
    setTimeout(function () {
        btn.classList.remove("userflash");
        flash.pause();
    }, 250);
};




// function btnenable(){
//     red.disabled=false;
//     yellow.disabled=false;
//     green.disabled=false;
//     purple.disabled=false;
// }
// function btndisable(){
 
// }

function btnpress() {
     let identityBtn = this;
    console.log("button was pressed");
    console.log(identityBtn);
    userflash(identityBtn);
    userColor=identityBtn.getAttribute("id");
 
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
  
}
function checkAns(idx){
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
           setTimeout(function(){
            levelup(); 

           },1000)
        }
      
    }
    else{
        
        h2.innerHTML=`Game Over!<b>Your score was :${level-1}</b><br>click Play button to start game`;
        document.body.style.background="red";
        let option=document.querySelector(".option");
       
        background.pause();
     let gameover=new Audio("gameover.mp3");
     
     gameover.play();
    
        setTimeout(function(){
            
            document.body.style.background="white"; 
        },150)
     
        reset();
      
     
     

    }
}
function reset(){
    userSeq=[];
    gameSeq=[];
level=0; 

    started=false;
  
}



function showHighScore(){
    
    if(level-1>highScore){
        highScore=level-1;
        
    }
    else if(level-1<highScore){
        highScore=highScore;

    }
    else{
        highScore=level-1;
    }
  
span.innerText=highScore;
}