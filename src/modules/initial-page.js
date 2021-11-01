// initial-page.js

import domTools from './dom-tools';

const initialPage = (() => {
  const attributions = [
    {
      href: 'https://www.artstation.com/artwork/aa6R8',
      text: 'Background art by Renaud ROCHE',
    },
    {
      href: 'https://www.artstation.com/artwork/nlKG6',
      text: 'Additional art by J.Otto Szatmari',
    },
  ];

  // private

  // - header:

  const createHeader = () => {
    const header = document.createElement('header');
    const title = domTools.createElement('h1', "Bob Dyson's Bar");
    header.appendChild(title);
    return header;
  };

  const createNav = () => {
    const nav = document.createElement('nav');
    const homeTab = domTools.createElement(
      'div',
      'Home',
      'tab',
      'active',
      'js-home',
    );
    const menuTab = domTools.createElement('div', 'Menu', 'tab', 'js-menu');
    const contactsTab = domTools.createElement(
      'div',
      'Contacts',
      'tab',
      'js-contacts',
    );
    domTools.appendChildren(nav, homeTab, menuTab, contactsTab);
    return nav;
  };

  // - main:

  const createMain = () => {
    const main = document.createElement('main');
    const contentDiv = domTools.createElement(
      'div',
      null,
      'content',
      'blue-border',
      'js-content',
    );
    main.appendChild(contentDiv);
    return main;
  };

  // - footer:

  const createAttributionLink = (href, text) => {
    const link = domTools.createElement('a', text, 'attribution');
    link.href = href;
    return link;
  };

  const createAttributionElement = (attribution) => {
    const attributionElement = document.createElement('li');
    const link = createAttributionLink(attribution.href, attribution.text);
    attributionElement.appendChild(link);
    return attributionElement;
  };

  const createAttributionList = () => {
    const attributionList = document.createElement('ul');
    const attributionListElements = attributions.map(createAttributionElement);
    attributionListElements.forEach((el) => attributionList.appendChild(el));
    return attributionList;
  };

  const createMyGithubImg = () => {
    const img = domTools.createElement('img', null, 'my-github');
    img.src = 'https://avatars.githubusercontent.com/u/46364597?v=4';
    img.alt = '@scrof90';
    return img;
  };

  const createMyGithubLink = () => {
    const myGithubLink = document.createElement('a');
    myGithubLink.href = 'https://github.com/scrof90';
    const img = createMyGithubImg();
    myGithubLink.appendChild(img);
    return myGithubLink;
  };

  const createFooter = () => {
    const footer = document.createElement('footer');
    const attributionList = createAttributionList();
    const myGithubLink = createMyGithubLink();
    domTools.appendChildren(footer, attributionList, myGithubLink);
    return footer;
  };

  // public functions:

  const load = () => {
    const body = document.querySelector('body');
    const header = createHeader();
    const nav = createNav();
    const main = createMain();
    const footer = createFooter();
    domTools.appendChildren(body, header, nav, main, footer);
  };

  return {
    load,
  };
})();

export default initialPage;
