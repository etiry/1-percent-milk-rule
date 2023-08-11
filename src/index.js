import config from '../config';

const Food = (data) => {
  const getFood = (food) => {
    if (!food.parsed) {
      return food.hints[0].food;
    }
    return food.parsed[0].food;
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

  const template = `
    <h1> ${food.food.isProteinFood} </h1>`;

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

fetchFood('Parmesan');
