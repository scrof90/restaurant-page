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
  const title = createTitle();
  header.appendChild(title);
  return header;
}

function createTitle() {
  const title = document.createElement('h1');
  title.textContent = "Saul Dyson's Bar";
  return title;
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
  const tab = document.createElement('div');
  tab.classList.add('tab', jsHook);
  if (isActive) tab.classList.add('active');
  tab.textContent = text;
  return tab;
}

// main

function createMain() {
  const main = document.createElement('main');
  const contentDiv = createContentDiv();
  main.appendChild(contentDiv);
  return main;
}

function createContentDiv() {
  const content = document.createElement('div');
  content.classList.add('content', 'blue-border', 'js-content');
  return content;
}

// footer

function createFooter() {
  const footer = document.createElement('footer');
  const attributionList = createAttributionList();
  const myGithubLink = createMyGithubLink();
  domTools.appendChildren(footer, attributionList, myGithubLink);
  return footer;
}

function createAttributionList() {
  const attributionList = document.createElement('ul');
  const attributionListElements = attributions.map(createAttributionElement);
  attributionListElements.forEach((el) => attributionList.appendChild(el));
  return attributionList;
}

function createAttributionElement(attribution) {
  const attributionElement = document.createElement('li');
  const href = attribution.href;
  const text = attribution.text;
  const link = createAttributionLink(href, text);
  attributionElement.appendChild(link);
  return attributionElement;
}

function createAttributionLink(href, text) {
  const link = document.createElement('a');
  link.classList.add('attribution');
  link.href = href;
  link.textContent = text;
  return link;
}

function createMyGithubLink() {
  const myGithubLink = document.createElement('a');
  myGithubLink.href = 'https://github.com/scrof90';
  const img = createMyGithubImg();
  myGithubLink.appendChild(img);
  return myGithubLink;
}

function createMyGithubImg() {
  const img = document.createElement('img');
  img.classList.add('my-github');
  img.src = 'https://avatars.githubusercontent.com/u/46364597?v=4';
  img.alt = '@scrof90';
  return img;
}

export default loadInitialPage;
