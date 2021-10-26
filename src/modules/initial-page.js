function loadInitialPage() {
  const body = document.querySelector('body');
  const header = createHeader();
  const nav = createNav();
  const main = createMain();
  const footer = createFooter();
  appendChildren(body, header, nav, main, footer);
}

// utility

function appendChildren(parent, ...children) {
  [...children].forEach((child) => parent.appendChild(child));
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
  const home = createTab(true, 'js-home', 'Home');
  const menu = createTab(false, 'js-menu', 'Menu');
  const contacts = createTab(false, 'js-contacts', 'Contacts');
  appendChildren(nav, home, menu, contacts);
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
  const content = createContentDiv();
  main.appendChild(content);
  return main;
}

function createContentDiv() {
  const content = document.createElement('div');
  content.classList.add('content', 'js-content');
  return content;
}

// footer

function createFooter() {
  const footer = document.createElement('footer');
  const attributionList = createAttributionList();
  const myGithubLink = createMyGithubLink();
  appendChildren(attributionList, myGithubLink);
  return footer;
}

function createAttributionList() {
  const attributionList = document.createElement('ul');

  const li1 = document.createElement('li');
  const link1 = createAttributionLink(
    'https://www.artstation.com/artwork/aa6R8',
    'Background art by Renaud ROCHE'
  );
  li1.appendChild(link1);

  const li2 = document.createElement('li');
  const link2 = createAttributionLink(
    'https://www.artstation.com/artwork/nlKG6',
    'Additional art by J.Otto Szatmari'
  );
  li2.appendChild(link2);

  appendChildren(attributionList, li1, li2);

  return attributionList;
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
