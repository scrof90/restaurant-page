// index.js

import initialPage from './modules/initial-page';
import homeTab from './modules/home-tab';
import menuTab from './modules/menu-tab';
import contactsTab from './modules/contacts-tab';

const initTabEvents = () => {
  const home = document.querySelector('.js-home');
  const menu = document.querySelector('.js-menu');
  const contacts = document.querySelector('.js-contacts');

  home.addEventListener('click', (e) => {
    e.target.classList.add('active');
    menu.classList.remove('active');
    contacts.classList.remove('active');
    homeTab.load();
  });

  menu.addEventListener('click', (e) => {
    e.target.classList.add('active');
    home.classList.remove('active');
    contacts.classList.remove('active');
    menuTab.load();
  });

  contacts.addEventListener('click', (e) => {
    e.target.classList.add('active');
    home.classList.remove('active');
    menu.classList.remove('active');
    contactsTab.load();
  });
};

initialPage.load();
homeTab.load();
initTabEvents();
