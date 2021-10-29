import domTools from './dom-tools';

const menuItems = [
  {
    name: 'Improbable Burger',
    imgSrc: 'img/menu-items/improbable-burger.jpg',
    desc: 'Made by careful manipulation of probability waves we made the most perfect burger in Sol, conjured straight from the vacuum of space.'
  }
];

function loadMenuTab() {
  const content = document.querySelector('.js-content');
  content.innerHTML = '';
  menuItems.forEach((item) => {
    const menuItem = createMenuItem(item);
    content.appendChild(menuItem);
  });
}

// menu item

function createMenuItem(item) {
  const menuItem = domTools.createElement(
    'div',
    null,
    'menu-item',
    'blue-border'
  );
  const name = domTools.createElement('h2', item.name);
  const image = createMenuImage(item.imgSrc);
  const description = domTools.createElement('p', item.desc);
  domTools.appendChildren(menuItem, name, image, description);
  return menuItem;
}

function createMenuImage(imgSrc) {
  const image = domTools.createElement('img', null, 'img-home');
  image.src = imgSrc;
  return image;
}

export default loadMenuTab;
