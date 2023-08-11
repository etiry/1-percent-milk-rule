import config from '../config';

const Food = (data) => {
  const getFood = (myFood) => {
    if (!myFood.parsed) {
      return myFood.hints[0].food;
    }
    return myFood.parsed[0].food;
  };

  const calculateProteinRatio = (food) => {
    const onePercentMilkRatio = (3.37 * 4) / 42;
    const foodRatio = (food.nutrients.PROCNT * 4) / food.nutrients.ENERC_KCAL;

    if (foodRatio >= onePercentMilkRatio) {
      return true;
    }

    return false;
  };

  const getFoodDetails = (food) => ({
    id: food.foodId,
    name: food.label,
    image: food.image,
    calories: food.nutrients.ENERC_KCAL,
    protein: food.nutrients.PROCNT,
    isProteinFood: calculateProteinRatio(food),
  });

  const food = getFoodDetails(getFood(data));

  return {
    food,
  };
};

const setFood = (data) => Food(data);

const renderResult = (food) => {
  const result = document.querySelector('.result');

  result.replaceChildren();

  const emoji = String.fromCodePoint('0x1F4AA');

  const proteinFood = food.food.isProteinFood ? `Protein food! ${emoji}` : 'Not a protein food';

  const template = `
    <div class="col-md-4 offset-md-4">
      <h1>${proteinFood}</h1>
      <img src=${food.food.image}>
      <h3>${food.food.name}</h3>
    </div>`;

  result.innerHTML = template;
};

const fetchFood = (query) => {
  const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${config.configInfo.appId}&app_key=${config.configInfo.appKey}&ingr=${query}`;

  fetch(url, {
    method: 'GET',
    dataType: 'json',
  })
    .then((response) => response.json())
    .then((data) => setFood(data))
    .then((result) => renderResult(result));
};

document.querySelector('#btnFetch').addEventListener('click', () => {
  const searchTerm = document.querySelector('#search-query').value;

  fetchFood(searchTerm);

  document.querySelector('#search-query').value = '';
});
