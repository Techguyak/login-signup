function myfunc1(){
    document.getElementById("box1").style.display ="block";
    document.getElementById("box").style.display="none";
}
function myfunc2(){
    document.getElementById("box").style.display ="block";
    document.getElementById("box1").style.display="none";
}

let choice = false;
document.querySelector('.lock-btn').addEventListener('click',()=>{
    toshow();
});
function toshow(){
    if(!choice){
    document.getElementById("lock-show").setAttribute('type','text');
    choice = true;
    
}
    else{
        document.getElementById("lock-show").setAttribute('type','password')
       choice = false; 
    }
}
document.querySelector('.lock1-btn').addEventListener('click',()=>{
    toshow1();
});
function toshow1(){
    if(!choice){
    document.getElementById("lock1-show").setAttribute('type','text');
    choice = true;
    
}
    else{
        document.getElementById("lock1-show").setAttribute('type','password')
       choice = false; 
    }
}
document.querySelector('.lock2-btn').addEventListener('click',()=>{
    toshow2();
});
function toshow2(){
    if(!choice){
    document.getElementById("lock2-show").setAttribute('type','text');
    choice = true;
    
}
    else{
        document.getElementById("lock2-show").setAttribute('type','password')
       choice = false; 
    }
}

