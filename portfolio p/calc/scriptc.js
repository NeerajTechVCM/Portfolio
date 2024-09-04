let string='';
let buttons=document.querySelectorAll('.button');
let screen=document.querySelector('.screen');
Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e)=>{
    console.log(e.target.innerHTML)
    if(e.target.innerHTML=='='){
        string=eval(string);
        screen.value=string;
        

    }
    else if(e.target.innerHTML=='AC'){
        string='';
     
        screen.value=string;
        }
    else if(e.target.innerHTML=='Del'){
        string=string.substring(0,string.length-1);
     
        screen.value=string;
    }
    else if(e.target.innerHTML=='%'){
        
        screen.value=string/100;
    }
   
    else{
        string=string+e.target.innerHTML;
        screen.value=string;
    }
})
})

// let a=prompt("enter the color");
// document.body.style.background=a;
