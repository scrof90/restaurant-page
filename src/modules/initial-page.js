function loadPage() {
  const body = document.querySelector('body');
  const elements = [createHeader(), createNav(), createMain(), createFooter()];
  elements.forEach((el) => body.appendChild(el));
}

function createHeader() {
  const header = document.createElement('header');
  const title = document.createElement('h1');
  title.textContent = "Saul Dyson's Bar";

  header.appendChild(title);

  return header;
}

function createNav() {
  const nav = document.createElement('nav');

  const home = document.createElement('div');
  home.classList.add('tab', 'active', 'js-home');
  home.textContent = 'Home';

  const menu = document.createElement('div');
  menu.classList.add('tab', 'js-menu');
  menu.textContent = 'Menu';

  const contacts = document.createElement('div');
  contacts.classList.add('tab', 'js-contacts');
  contacts.textContent = 'Contacts';

  const elements = [home, menu, contacts];
  elements.forEach((el) => nav.appendChild(el));

  return nav;
}

function createMain() {
  return document.createElement('main');
}

function createFooter() {
  const footer = document.createElement('footer');
  const attributionList = createAttributionList();
  const myGithubLink = createMyGithubLink();

  footer.appendChild(attributionList);
  footer.appendChild(myGithubLink);

  return footer;
}

function createAttributionList() {
  const attributionList = document.createElement('ul');

  const li1 = document.createElement('li');
  const a1 = document.createElement('a');
  a1.classList.add('attribution');
  a1.href = 'https://www.artstation.com/artwork/aa6R8';
  a1.textContent = 'Background art by Renaud ROCHE';
  li1.appendChild(a1);

  const li2 = document.createElement('li');
  const a2 = document.createElement('a');
  a2.classList.add('attribution');
  a2.href = 'https://www.artstation.com/artwork/nlKG6';
  a2.textContent = 'Additional art by J.Otto Szatmari';
  li2.appendChild(a2);

  attributionList.appendChild(li1);
  attributionList.appendChild(li2);

  return attributionList;
}

function createMyGithubLink() {
  const myGithubLink = document.createElement('a');
  myGithubLink.href = 'https://github.com/scrof90';

  const img = document.createElement('img');
  img.classList.add('my-github');
  img.src = 'https://avatars.githubusercontent.com/u/46364597?v=4';
  img.alt = '@scrof90';

  myGithubLink.appendChild(img);

  return myGithubLink;
}

export { loadPage };
