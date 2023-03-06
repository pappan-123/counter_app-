
//for id we need to use #   
// let countValue=document.querySelector('#counter');

//as fetching function is id itself so no need to use #
let countValue=document.getElementById('counter');


function increment(){
    let val=parseInt(countValue.innerText);
    val=val+1;
    countValue.innerText=val;
}

function decrement(){
    let val=parseInt(countValue.innerText);
    val=val-1;
    countValue.innerText=val;
}