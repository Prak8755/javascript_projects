const btn=document.querySelector('.btn');
const dice=document.getElementById('dice');
const ul=document.querySelector('.show-roll')
const li=document.querySelector('.roll')


btn.addEventListener('click',function(){
    dice.classList.add('roll-animation');
    setTimeout(() => {
        dice.classList.remove('roll-animation');
       
    },1000);
    rollDice();
})

let i=0;
function rollDice(){
    
    const diceRoll=Math.trunc(Math.random()*6+1);
    const diceFace=getFace(diceRoll)
    dice.innerHTML=diceFace;
    showHostory(diceFace);
}

function showHostory(diceFace){
    li.innerHTML=`Roll ${++i}:<span>${diceFace}</span>`;
    li.classList.add('roll');
    ul.appendChild(li);
   
}

// const getFace=(diceRoll)=>{
// switch(diceRoll){
//     case 1:
//         return '&#9856';
//     case 2:
//          return '&#9857';
//     case 3:
//         return '&#9858';
//     case 4:
//         return '&#9859';
//     case 5:
//         return '&#9860'; 
//     case 6:
//         return '&#9861'; 
//     default:
//         return "";           
// } 
// }

const getFace=function(diceRoll){
    if(diceRoll===1){
        return '&#9856';
    }
    else if (diceRoll===2){
        return '&#9857';
    }
    else if (diceRoll===3){
        return '&#9858';
    }
    else if (diceRoll===4){
        return '&#9859';
    }
    else if (diceRoll===5){
        return '&#9860';
    }
    else if (diceRoll===6){
        return '&#9861';
    }
}




