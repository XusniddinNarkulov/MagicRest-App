import icons from '../../img/icons.svg';

class RecipeView {
  #parentElement = document.querySelector('.recipe');
  #data;
  #errorMessage = `Siz qidirayotgan ma'lumot topilmadi, iltimos qayta urinib ko'ring`;

  render(data) {
    this.#data = data;
    if (!data) return;

    this.#clearHTML();
    this.#generatorHTML(this.#data);
  }

  addHandleEvent(handle) {
    ['hashchange', 'load'].map(val => {
      window.addEventListener(val, handle);
    });
  }

  #clearHTML() {
    this.#parentElement.innerHTML = '';
  }

  errorNotify() {
    const html = `
  <div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${this.#errorMessage}</p>
  </div>
    `;
    this.#clearHTML();
    this.#parentElement.insertAdjacentHTML('afterbegin', html);
  }

  spinner() {
    const html = `
    <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>
    `;
    this.#clearHTML();
    this.#parentElement.insertAdjacentHTML('afterbegin', html);
  }

  #renderIngredients(d) {
    return d.map(val => {
      return `
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${val.quantity}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${val.unit}</span>
        ${val.description}
      </div>
    </li>
      `;
    });
  }

  #generatorHTML(d) {
    let html = `
      <figure class="recipe__fig">
      <img src="${d.image_url}" alt="Tomato" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${d.title}</span>
      </h1>
    </figure>
    
    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${
          d.cooking_time
        }</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${
          d.servings
        }</span>
        <span class="recipe__info-text">servings</span>
    
        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
    
      <div class="recipe__user-generated">
        <svg>
          <use href="${icons}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${icons}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>
    
    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${this.#renderIngredients(d.ingredients).join('')}
      </ul>
    </div>
    
    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${d.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
      `;
    this.#parentElement.insertAdjacentHTML('afterbegin', html);
  }
}

export default new RecipeView();
