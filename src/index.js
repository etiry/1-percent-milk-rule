import config from '../config';

const fetchFood = function (query) {
  const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${config.configInfo.appId}&app_key=${config.configInfo.appKey}&ingr=${query}`;

  fetch(url, {
    method: 'GET',
    dataType: 'json'
  })
    .then(data => data.json())
    .then(data => console.log(data))
};

fetchFood('broccoli');