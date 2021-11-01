// menu-tab.js

import domTools from './dom-tools';

const menuTab = (() => {
  const menuItems = [
    {
      name: 'Improbable Burger',
      imgSrc: 'img/menu-items/improbable-burger.jpg',
      desc: 'Conjured straight from the vacuum of space, Improbable Burger truly is the pinnacle of probability engineering.',
    },
    {
      name: 'Lorem ipsum',
      imgSrc: 'img/menu-items/improbable-burger.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil quidem ipsa.',
    },
    {
      name: 'Lorem ipsum',
      imgSrc: 'img/menu-items/improbable-burger.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil quidem ipsa.',
    },
  ];

  // private

  // menu item

  const createMenuImage = (alt, imgSrc) => {
    const image = domTools.createElement('img', null, 'img-home');
    image.alt = alt;
    image.src = imgSrc;
    return image;
  };

  const createMenuItem = (item) => {
    const menuItem = domTools.createElement(
      'div',
      null,
      'menu-item',
      'blue-border',
    );
    const name = domTools.createElement('h2', item.name);
    const image = createMenuImage(item.name, item.imgSrc);
    const description = domTools.createElement('p', item.desc);
    domTools.appendChildren(menuItem, name, image, description);
    return menuItem;
  };

  // public

  const load = () => {
    const content = document.querySelector('.js-content');
    content.innerHTML = '';
    menuItems.forEach((el) => {
      const menuItem = createMenuItem(el);
      content.appendChild(menuItem);
    });
  };

  return {
    load,
  };
})();

export default menuTab;
