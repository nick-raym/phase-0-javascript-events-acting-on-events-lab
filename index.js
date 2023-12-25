// Your code here
const dodger=document.getElementById("dodger");
dodger.style.backgroundColor="rgb(255 0 86)";
dodger.style.bottom = "0px";

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown",function(event){
    if(event.key==="ArrowLeft"){
        const unpx = dodger.style.left.replace("px","");
        const pars=parseInt(unpx,10);
        if (pars>0){
        dodger.style.left=`${pars-1}px`;
    }
        
    }
});

moveDodgerLeft();

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener('keydown',function(event){
        if(event.key==="ArrowRight"){
            const unpx = dodger.style.left.replace("px","");
            const pars=parseInt(unpx,10);
            if(pars<360){
            dodger.style.left=`${pars+1}px`;
        }
        }
})

moveDodgerRight();