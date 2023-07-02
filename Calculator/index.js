const buttonsEl=document.querySelectorAll('button');
const input=document.querySelector('.input-filed');

input.addEventListener('keypress',function(e){
   if(e.key==='Enter'){
    showResult()
   }
})

for(let i=0;i<buttonsEl.length;i++){
    buttonsEl[i].addEventListener('click',function calculater(e){
      if(buttonsEl[i].textContent==='C'){
        clearInputfiled()
      }
      else if(buttonsEl[i].textContent==='='){
        showResult(buttonsEl[i].textContent)
      }
      else{
        inputValue(buttonsEl[i].textContent)
      }

    })
}


function clearInputfiled(){
input.value="";

}

function showResult(){
input.value=eval(input.value)
}

function inputValue(val){
input.value+=val
}
