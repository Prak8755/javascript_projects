
const api_key="6c16d72ad1194a7482d1f38c4c111130";

const recipeList=document.querySelector('#recipe-list');

function displayRecipe(recipes){
recipeList.innerHTML='';
recipes.forEach((recipe)=>{
    const li=document.createElement('li');
    li.classList.add('recipe-item');
    const img=document.createElement('img');
    img.src=recipe.image;
    img.alt=`${recipe.dishTypes}`;
    li.appendChild(img);
   const h2=document.createElement('h2');
  h2.innerHTML=recipe.title;
   li.appendChild(h2);
   const p=document.createElement('p');
   p.innerHTML=`<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((e)=>e.original)}`;
   li.appendChild(p);
const a=document.createElement('a');
a.innerHTML='View More';
a.href=recipe.spoonacularSourceUrl;
li.appendChild(a);


    recipeList.appendChild(li);
})

}

async function getRecipes(){
const response=await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${api_key}`);
const data= await response.json();
return data.recipes;

}


async function init(){
    const recipes=await getRecipes();
    console.log(recipes)
    displayRecipe(recipes);
}
init()