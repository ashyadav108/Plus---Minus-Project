const countValue=document.getElementById('counter');

const increment=()=>{
let value=parseInt(countValue.innerHTML);
value=value+1;
countValue.innerHTML=value;
};
const decrement=()=>{
    let value=parseInt(countValue.innerHTML);
    value=value-1;
    countValue.innerHTML=value;
};