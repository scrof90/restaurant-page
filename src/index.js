import loadInitialPage from './modules/initial-page';
import loadHomeTab from './modules/home-tab';
import loadMenuTab from './modules/menu-tab';
import loadContactsTab from './modules/contacts-tab';

loadInitialPage();
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
