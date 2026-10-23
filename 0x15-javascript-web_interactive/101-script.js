document.addEventListener('DOMContentLoaded', () => {
  let items = ['Item'];
  const myList = document.querySelector('ul.my_list');
  const addItem = document.querySelector('#add_item');
  const removeItem = document.querySelector('#remove_item');
  const clearList = document.querySelector('#clear_list');

  function render () {
    myList.innerHTML = '';
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      myList.appendChild(li);
    });
  }

  addItem.addEventListener('click', () => {
    items.push('Item');
    render();
  });

  removeItem.addEventListener('click', () => {
    if (items.length === 0) {
      return;
    }
    items.pop();
    render();
  });

  clearList.addEventListener('click', () => {
    items = [];
    render();
  });
});
