// contacts-tab.js

import domTools from './dom-tools';

// TODO: structure and style properly

const contactsTab = (() => {
  const contacts = [
    {
      name: 'Bob Dyson',
      imgSrc: 'img/menu-items/improbable-burger.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil quidem ipsa.',
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

  const createContactImage = (alt, imgSrc) => {
    const image = domTools.createElement('img', null, 'img-home');
    image.alt = alt;
    image.src = imgSrc;
    return image;
  };

  const createContact = (item) => {
    const contact = domTools.createElement(
      'div',
      null,
      'contact-item',
      'blue-border',
    );
    const name = domTools.createElement('h2', item.name);
    const image = createContactImage(item.name, item.imgSrc);
    const description = domTools.createElement('p', item.desc);
    domTools.appendChildren(contact, name, description, image);
    return contact;
  };

  // public

  const load = () => {
    const content = document.querySelector('.js-content');
    content.innerHTML = '';
    contacts.forEach((el) => {
      const contact = createContact(el);
      content.appendChild(contact);
    });
  };

  return {
    load,
  };
})();

export default contactsTab;
