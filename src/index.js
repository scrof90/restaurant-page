import { loadPage } from './modules/initial-page';
import { loadHomeTab } from './modules/home';
import { loadMenuTab } from './modules/menu';
import { loadContactsTab } from './modules/contacts';

loadPage();
loadHomeTab();
initTabEventListeners();

function initTabEventListeners() {
  const homeTab = document.querySelector('.js-home');
  const menuTab = document.querySelector('.js-menu');
  const contactsTab = document.querySelector('.js-contacts');

  homeTab.addEventListener('click', (e) => {
    e.target.classList.add('active');
    menuTab.classList.remove('active');
    contactsTab.classList.remove('active');
    loadHomeTab();
  });
  menuTab.addEventListener('click', (e) => {
    e.target.classList.add('active');
    homeTab.classList.remove('active');
    contactsTab.classList.remove('active');
    loadMenuTab();
  });
  contactsTab.addEventListener('click', (e) => {
    e.target.classList.add('active');
    homeTab.classList.remove('active');
    menuTab.classList.remove('active');
    loadContactsTab();
  });
}
