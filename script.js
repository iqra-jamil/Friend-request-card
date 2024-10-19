let istatus=document.querySelector(".card-container .status");
let button=document.querySelector("button");
flag=0
button.addEventListener("click",function(){
   
    if(flag==0){
        istatus.innerHTML="Friend";
        istatus.style.color="green";
        button.textContent="Remove Friend";
        flag=1;
        
    }
    else{
        istatus.innerHTML="Stranger";
    istatus.style.color="red";
    button.textContent="Add Friend";
    flag=0;
    }
    
})