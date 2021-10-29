import domTools from './dom-tools';

const attributions = [
  {
    href: 'https://www.artstation.com/artwork/aa6R8',
    text: 'Background art by Renaud ROCHE'
  },
  {
    href: 'https://www.artstation.com/artwork/nlKG6',
    text: 'Additional art by J.Otto Szatmari'
  }
];

function loadInitialPage() {
  const body = document.querySelector('body');
  const header = createHeader();
  const nav = createNav();
  const main = createMain();
  const footer = createFooter();
  domTools.appendChildren(body, header, nav, main, footer);
}

// header

function createHeader() {
  const header = document.createElement('header');
  const title = domTools.createElement('h1', "Saul Dyson's Bar");
  header.appendChild(title);
  return header;
}

// nav

function createNav() {
  const nav = document.createElement('nav');
  const homeTab = createTab(true, 'js-home', 'Home');
  const menuTab = createTab(false, 'js-menu', 'Menu');
  const contactsTab = createTab(false, 'js-contacts', 'Contacts');
  domTools.appendChildren(nav, homeTab, menuTab, contactsTab);
  return nav;
}

function createTab(isActive, jsHook, text) {
  const tab = domTools.createElement('div', text, 'tab', jsHook);
  if (isActive) tab.classList.add('active');
  return tab;
}

// main

function createMain() {
  const main = document.createElement('main');
  const contentDiv = domTools.createElement(
    'div',
    null,
    'content',
    'blue-border',
    'js-content'
  );
  main.appendChild(contentDiv);
  return main;
}

// footer

function createFooter() {
  const footer = document.createElement('footer');
  const attributionList = createAttributionList();
  const myGithubLink = createMyGithubLink();
  domTools.appendChildren(footer, attributionList, myGithubLink);
  return footer;
}

// attribution list

function createAttributionList() {
  const attributionList = document.createElement('ul');
  const attributionListElements = attributions.map(createAttributionElement);
  attributionListElements.forEach((el) => attributionList.appendChild(el));
  return attributionList;
}

function createAttributionElement(attribution) {
  const attributionElement = document.createElement('li');
  const link = createAttributionLink(attribution.href, attribution.text);
  attributionElement.appendChild(link);
  return attributionElement;
}

function createAttributionLink(href, text) {
  const link = domTools.createElement('a', text, 'attribution');
  link.href = href;
  return link;
}

// github link

function createMyGithubLink() {
  const myGithubLink = document.createElement('a');
  myGithubLink.href = 'https://github.com/scrof90';
  const img = createMyGithubImg();
  myGithubLink.appendChild(img);
  return myGithubLink;
}

function createMyGithubImg() {
  const img = domTools.createElement('img', null, 'my-github');
  img.src = 'https://avatars.githubusercontent.com/u/46364597?v=4';
  img.alt = '@scrof90';
  return img;
}

export default loadInitialPage;
