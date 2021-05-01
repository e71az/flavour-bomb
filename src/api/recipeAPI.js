// A mock function to mimic making an async request for data
// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
// };

// fetch('www.themealdb.com/api/json/v1/1/filter.php?c=Seafood', requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log('error', error));

// export function fetchRecipe(amount = 'No data') {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve({ data: amount }), 500)
//   );
// }

// import fetch from 'node-fetch';
// import 'regenerator-runtime/runtime';

export const getAllRecipes = async () => {
  let API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

  let response = '';
  let recipe;
  try {
    response = await fetch(API);

    if (response.ok === false) {
      throw Error('Something went wrong with the Recipe API');
    }

    recipe = await response.json();
  } catch (error) {
    API = 'www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
    response = await fetch(API);
    recipe = await response.json();
  }

  return recipe;
  // return new Promise((resolve) =>
  //   setTimeout(() => resolve({ data: recipeContent }), 1000)
  // );
};

// console.log(getAllRecipes())
