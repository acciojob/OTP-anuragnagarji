let inputs=document.getElementsByClassName("code");
window. onload = function() { 
    for(let inEle of inputs){
        inEle.value="";
    }
    inputs[0]. focus(); }
for(let t of inputs){
	t.addEventListener("keyup",nextInput);
	t.addEventListener("keyup",lastInput);
	t.addEventListener("keydown",allReadyFilled);
}
function allReadyFilled(e){
    if((e.keyCode!=8)&&(e.target.value.length>0)){
        e.target.value="";
    }
}
function lastInput(e){
    let ind =e.target.id;
    if(e.keyCode==8){
        
        index= Number(ind.slice(-1));
        let end=document.getElementById("code-"+(index-1));
        let len = end.value.length;

    // Mostly for Web Browsers get fucos at end of input
    if (end.setSelectionRange) {
        end.focus();
        end.setSelectionRange(len, len);
    } else if (end.createTextRange) {
        /*let t = end.createTextRange();
        t.collapse(true);
        t.moveEnd('character', len);
        t.moveStart('character', len);
        t.select();*/
    }
       // console.log("hello"+(index-1));

    }
}

function nextInput(e) {
let ind =e.target.id;
if(isNaN(e.key)){ //if not a number enter user
    console.log(isNaN(e.target.value))
    e.target.value="";
    e.preventDefault();
    return;
}
    
    else {
        if(e.target.value.length>0){
           // e.target.value="" //it use only keydown event 
        }
       index= Number(ind.slice(-1));
       inputs[index].focus();
    }
	
}