const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");

console.log(id);

const url = "http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;
const drinkName = document.querySelector(".title");
const imageOfDrink = document.querySelector(".image-drink");

async function drinkDetails() {
  const response = await fetch(url);
  const result = await response.json();

  showCocktail(result.drinks[0]);
}

function showCocktail(cocktail) {
  console.log(cocktail);
  drinkName.innerHTML = cocktail.strDrink;
  imageOfDrink.src = cocktail.strDrinkThumb;
}

drinkDetails();
