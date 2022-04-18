class SearchView {
  #parentElement = document.querySelector('.search');

  getValue() {
    const val = document.querySelector('.search__field').value;
    this.#clearInput();
    return val;
  }

  #clearInput() {
    document.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handle) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handle();
    });
  }
}

export default new SearchView();
