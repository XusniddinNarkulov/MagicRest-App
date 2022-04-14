class SearchView {
  #parentElement = document.querySelector('.search');

  getValue() {
    const val = document.querySelector('.search__field').value;
    return val;
  }

  addHandleEvent(data) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();

      console.log(data());
    });
  }
}

export default new SearchView();
