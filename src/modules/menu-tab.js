// menu-tab.js

import domTools from './dom-tools';

const menuTab = (() => {
  const menuItems = [
    {
      name: 'Improbable Burger',
      imgSrc: 'img/menu-items/improbable-burger.jpg',
      desc: 'Made by careful manipulation of probability waves we made the most perfect burger in Sol, conjured straight from the vacuum of space.'
    }
  ];

  // private

  // menu item

  const _createMenuItem = (item) => {
    const menuItem = domTools.createElement(
      'div',
      null,
      'menu-item',
      'blue-border'
    );
    const name = domTools.createElement('h2', item.name);
    const image = _createMenuImage(item.name, item.imgSrc);
    const description = domTools.createElement('p', item.desc);
    domTools.appendChildren(menuItem, name, image, description);
    return menuItem;
  };

  const _createMenuImage = (alt, imgSrc) => {
    const image = domTools.createElement('img', null, 'img-home');
    image.alt = alt;
    image.src = imgSrc;
    return image;
  };

  // public

  const load = () => {
    const content = document.querySelector('.js-content');
    content.innerHTML = '';
    menuItems.forEach((el) => {
      const menuItem = _createMenuItem(el);
      content.appendChild(menuItem);
    });
  };

  return {
    load
  };
})();

export default menuTab;
