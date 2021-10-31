// home-tab.js

import domTools from './dom-tools';

const homeTab = (() => {
  // private

  const _createHomeImage = () => {
    const image = domTools.createElement('img', null, 'img-home');
    image.src =
      'img/j-otto-szatmari-daygonebar-spacestation-jottoszatmari2016.jpg';
    image.alt = 'Bar - Space Station by J.Otto Szatmari';
    return image;
  };

  // public

  const load = () => {
    const content = document.querySelector('.js-content');
    content.innerHTML = '';
    const image = _createHomeImage();
    const header = domTools.createElement('h2', "Welcome to Bob Dyson's Bar!");
    const description = domTools.createElement(
      'p',
      'With a spectacular dancing floor harboring the best DJs from all over the solar the system and a million energy credit view of the recently built <strong>Dyson sphere</strong>, enjoy a wide variety of unique meals that would satisfy even the most sophisticated digestive system in the galaxy.'
    );
    const workingHours = domTools.createElement('p', 'We are always open');
    const species = domTools.createElement(
      'p',
      'And all species are welcome<y>*</y>'
    );
    const bottomText = domTools.createElement(
      'p',
      '<y>*</y>the Ur-Quan will be denied entry',
      'bottom-text'
    );
    domTools.appendChildren(
      content,
      image,
      header,
      description,
      workingHours,
      species,
      bottomText
    );
  };

  return {
    load
  };
})();

export default homeTab;
