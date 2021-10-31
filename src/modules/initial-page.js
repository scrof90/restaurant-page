// initial-page.js

import domTools from './dom-tools';

const initialPage = (() => {
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

  // private

  // header

  const _createHeader = () => {
    const header = document.createElement('header');
    const title = domTools.createElement('h1', "Bob Dyson's Bar");
    header.appendChild(title);
    return header;
  };

  // nav

  const _createNav = () => {
    const nav = document.createElement('nav');
    const homeTab = domTools.createElement(
      'div',
      'Home',
      'tab',
      'active',
      'js-home'
    );
    const menuTab = domTools.createElement('div', 'Menu', 'tab', 'js-menu');
    const contactsTab = domTools.createElement(
      'div',
      'Contacts',
      'tab',
      'js-contacts'
    );
    domTools.appendChildren(nav, homeTab, menuTab, contactsTab);
    return nav;
  };

  // main

  const _createMain = () => {
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
  };

  // footer

  const _createFooter = () => {
    const footer = document.createElement('footer');
    const attributionList = _createAttributionList();
    const myGithubLink = _createMyGithubLink();
    domTools.appendChildren(footer, attributionList, myGithubLink);
    return footer;
  };

  // attribution list

  const _createAttributionList = () => {
    const attributionList = document.createElement('ul');
    const attributionListElements = attributions.map(_createAttributionElement);
    attributionListElements.forEach((el) => attributionList.appendChild(el));
    return attributionList;
  };

  const _createAttributionElement = (attribution) => {
    const attributionElement = document.createElement('li');
    const link = _createAttributionLink(attribution.href, attribution.text);
    attributionElement.appendChild(link);
    return attributionElement;
  };

  const _createAttributionLink = (href, text) => {
    const link = domTools.createElement('a', text, 'attribution');
    link.href = href;
    return link;
  };

  // github link

  const _createMyGithubLink = () => {
    const myGithubLink = document.createElement('a');
    myGithubLink.href = 'https://github.com/scrof90';
    const img = _createMyGithubImg();
    myGithubLink.appendChild(img);
    return myGithubLink;
  };

  const _createMyGithubImg = () => {
    const img = domTools.createElement('img', null, 'my-github');
    img.src = 'https://avatars.githubusercontent.com/u/46364597?v=4';
    img.alt = '@scrof90';
    return img;
  };

  // public

  const load = () => {
    const body = document.querySelector('body');
    const header = _createHeader();
    const nav = _createNav();
    const main = _createMain();
    const footer = _createFooter();
    domTools.appendChildren(body, header, nav, main, footer);
  };

  return {
    load
  };
})();

export default initialPage;
