const { async } = require('regenerator-runtime');

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

const recipeShow = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.spinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.errorNotify();
  }
};
// recipeShow();

const controlSearchResults = async function () {
  try {
    const query = searchView.getValue();
    if (!query) return;

    await model.loadSearchResults(query);
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandleEvent(recipeShow);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
// window.addEventListener('hashchange', recipeShow);
// window.addEventListener('load', recipeShow);

//
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// console.log(window.location);
