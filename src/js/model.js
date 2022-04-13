import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJson } from './helpers.js';

export const state = {
  recipe: {},
};

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const loadRecipe = async function (id) {
  try {
    const json = await Promise.race([getJson(API_URL + id), timeout(5)]);
    const obj = json.data.recipe;
    state.recipe = {
      publisher: obj.publisher,
      source_url: obj.source_url,
      ingredients: obj.ingredients,
      image_url: obj.image_url,
      title: obj.title,
      cooking_time: obj.cooking_time,
      id: obj.id,
      servings: obj.servings,
    };
  } catch (err) {
    alert(err);
  }
};
