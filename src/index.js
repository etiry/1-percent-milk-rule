import config from '../config';

const Food = (data) => {

  const getFood = (data) => {
    if (data.parsed) {
      return data.parsed[0].food; 
    } else {
      return data.parsed[0].food;
    }
  }

  const calculateProteinRatio = (food) => {
    const onePercentMilkRatio = (3.37 * 4) / 42;
    const foodRatio = (food.nutrients.PROCNT * 4) / food.nutrients.ENERC_KCAL;  

    if (foodRatio >= onePercentMilkRatio) {
      return true;
    }

    return false;
  }

  const getFoodDetails = (food) => {
    return {
      id: food.foodId,
      name: food.label,
      calories: food.nutrients.ENERC_KCAL,
      protein: food.nutrients.PROCNT,
      isProteinFood: calculateProteinRatio(food)
    }
  }

  const food = getFoodDetails(getFood(data));

  return {
    food
  }
}

const fetchFood = function (query) {
  const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${config.configInfo.appId}&app_key=${config.configInfo.appKey}&ingr=${query}`;

  fetch(url, {
    method: 'GET',
    dataType: 'json'
  })
    .then(data => data.json())
    .then(data => console.log(Food(data)))
};

fetchFood('Parmesan');