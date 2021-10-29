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
    const menuItem = createMenuItem(item.name, item.imgSrc, item.desc);
    content.appendChild(menuItem);
  });
}

// menu item

function createMenuItem(itemName, itemImgSrc, itemDesc) {
  const menuItem = domTools.createElement(
    'div',
    null,
    'menu-item',
    'blue-border'
  );
  const name = domTools.createElement('h2', itemName);
  const image = domTools.createElement('img', null, 'img-home');
  image.src = itemImgSrc;
  const description = domTools.createElement('p', itemDesc);
  domTools.appendChildren(menuItem, name, image, description);
  return menuItem;
}

export default loadMenuTab;
