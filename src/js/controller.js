const { async } = require('regenerator-runtime');

import * as model from './model.js';
import recipeView from './views/recipeView.js';

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

const recipeShow = async function () {
  try {
    const id = window.location.hash.slice(1);

    recipeView.spinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};
recipeShow();

// {quantity: 1, unit: '', description: 'tbsp. canola or olive oil'}

['hashchange', 'load'].map(val => {
  window.addEventListener(val, recipeShow);
});

// window.addEventListener('hashchange', recipeShow);
// window.addEventListener('load', recipeShow);

//
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// console.log(window.location);
let arr = [
  [1, 2, 3],
  [4, 5, 6],
];

function myFunction(...arrays) {
  let ar;
  let arr;
  for (let el of arrays) {
    [ar] +=[...el] ;
    arr.push(ar)
  }
  return arr;
}

console.log(myFunction([1, 2, 3], [4, 5, 6]));
