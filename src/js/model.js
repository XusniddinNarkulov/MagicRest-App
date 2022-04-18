import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJson } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};

export const loadRecipe = async function (id) {
  try {
    const json = await getJson(API_URL + id);
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
    throw err;
  }
};

export const loadSearchResults = async function (foodName) {
  try {
    state.search.query = foodName;
    const data = await getJson(`${API_URL}?search=${foodName}`);
    // console.log(data);
    state.search.results = data.data.recipes.map(val => {
      return {
        id: val.id,
        title: val.title,
        publisher: val.publisher,
        image: val.image,
      };
    });
  } catch (err) {
    throw err;
  }
};
loadSearchResults('pizza');
