
const btnStart=document.querySelector('.btn-start');
const btnStop=document.querySelector('.btn-stop');
const btnReset=document.querySelector('.btn-reset');
const timerShow=document.querySelector('.timer');

let interval;
let time=10;


function displayData(){
    const min=String(Math.trunc(time/60)).padStart(2,0);
    const sec=String(time%60).padStart(2,0);
    timerShow.innerHTML=`${min}:${sec}`
}

btnStart.addEventListener('click',startTimer);
btnStop.addEventListener('click',stopTimer);
btnReset.addEventListener('click',resetTimer);

function startTimer(){
    
        interval=setInterval(() => {
            time--;
        displayData();
        if(time===0){
            alert('TIME OVER')
            clearInterval(interval);
           time=600;
           displayData();
        }
        },1000);
    };

 function stopTimer(){
    console.log(interval)
clearInterval(interval);
   };

   function resetTimer(){
   clearInterval(interval);
   time=1500;
   displayData();
   }

