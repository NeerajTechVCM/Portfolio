
let buttons=document.querySelectorAll('.button');
let screen=document.querySelector('.screen');
Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e)=>{

    if(e.target.innerHTML=='='){
        screen.value=eval(screen.value);
         }
    else if(e.target.innerHTML=='AC'){
        screen.value="";
        }
    else if(e.target.innerHTML=='Del'){
        screen.value=screen.value.substring(0,screen.value.length-1);
    }
    else if(e.target.innerHTML=='%'){
        
        screen.value=screen.value/100;
    }
   
    else{
        screen.value=screen.value+e.target.innerHTML;
    
    }
})
})

// let a=prompt("enter the color");
// document.body.style.background=a;
