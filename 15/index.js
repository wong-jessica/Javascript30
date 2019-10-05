  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = JSON.parse(localStorage.getItem('dishes')) || [];

  const addDish = (e) => {
    e.preventDefault();
    
    const dish = {
      name: `${e.target.item.value}`,
      selected: false
    }
    items.push(dish);
    loadDish(dish, itemsList, items.length-1);
    localStorage.setItem('dishes', JSON.stringify(items));
    e.target.reset();
  }

  const loadDish = (dish = {}, outputDishesHTML, i) => {
    outputDishesHTML.innerHTML += `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${dish.selected ? 'checked' : ''} />
        <label for="item${i}">${dish.name}</label>
      </li>
    `;
  };

  const loadDishes = (inputDishes = [], outputDishesHTML) => {
    inputDishes.map((dish, i) => loadDish(dish, outputDishesHTML, i));
  }

  const toggleDish = (e) => {
    if (!e.target.matches('input')) return;
    const index = e.target.dataset.index;    
    items[index].selected = !items[index].selected;
    localStorage.setItem('dishes', JSON.stringify(items));
  }

  addItems.addEventListener('submit', addDish);
  itemsList.addEventListener('click', toggleDish);
  loadDishes(items, itemsList);