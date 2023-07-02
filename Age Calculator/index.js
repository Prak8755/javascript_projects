const btn=document.querySelector('.btn');
const para=document.querySelector('.para');

const data=document.querySelector('.inputDate');


btn.addEventListener('click',function(e){
 e.preventDefault();
 if(data.value===''){
    alert('Please select your Birth Year')
 }
 else{
    const currentDate=new Date();
    const currentYear=currentDate.getFullYear();
   const inputDate=data.value;
   const birthYear=(new Date(inputDate)).getFullYear();
   let currentAge=currentYear-birthYear;
  const month=currentDate.getMonth()-(new Date(inputDate)).getMonth();
  if(month<0||month===0&&currentDate.getDate()<new Date(inputDate).getDate()){
currentAge--;
  }
  para.innerHTML=`You are now ${currentAge} years old`;
 }

});



