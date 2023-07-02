const bill=document.querySelector('.bill');
const tip=document.querySelector('.tip');
const btn=document.querySelector('.btn');
const result=document.querySelector('.result');
const total=document.querySelector('.total');


btn.addEventListener('click',clcTip);

function clcTip(){
    if(bill.value===""|| tip.value==='')
       return alert('Please enter mandatory fields');
    
        const billInput=+(bill.value);
        const tipInput=+(tip.value);
        const res=billInput+(billInput*tipInput)/100;
        result.textContent=`Your Total bill is RS ${res}`;
        total.style.margin='20px'

}

const x=10000000;
const y=111;
console.log((x/y).toFixed(3));