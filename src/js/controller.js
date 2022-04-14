const { async } = require('regenerator-runtime');

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

const recipeShow = async function () {
  try {
    const id = window.location.hash.slice(1);

    recipeView.spinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.errorNotify();
  }
};
// recipeShow();

recipeView.addHandleEvent(recipeShow);

searchView.addHandleEvent(searchView.getValue);

// window.addEventListener('hashchange', recipeShow);
// window.addEventListener('load', recipeShow);

//
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// console.log(window.location);
