// Your code here
function moveDodgerLeft(){
const dodger=document.getElementById("dodger");
dodger.style.backgroundColor="rgb(255 0 86)";

document.addEventListener('keydown',function(event){
    if(event.key==="ArrowLeft"){
        const unpx = dodger.style.left.replace("px","");
        const pars=parseInt(unpx,10);
        if(pars>0){
        dodger.style.left=`${pars-1}px`;
        console.log("DODGER moved left:", dodger.style.left);
    }
        
    }
})
}

moveDodgerLeft();

function moveDodgerRight(){

    document.addEventListener('keydown',function(event){
        if(event.key==="ArrowRight"){
            const unpx = dodger.style.left.replace("px","");
            const pars=parseInt(unpx,10);
            if(pars<360){
            dodger.style.left=`${pars+1}px`;
            console.log("DODGER moved right:", dodger.style.left);
        }
            
        }
    })
}

moveDodgerRight();