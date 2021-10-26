function loadHomeTab() {
  const content = document.querySelector('.js-content');
  content.innerHTML = '';
  const image = createHomeImage();
  const header = createTextElement('h2', "Welcome to Saul Dyson's Bar!");
  const description = createTextElement(
    'p',
    'With a spectacular dancing floor harboring the best DJs from all over the solar the system and a million energy credit view of a recently build <strong>Dyson sphere</strong>, enjoy a wide variety of unique meals that would satisfy even the most sophisticated digestive systems in the galaxy.'
  );
  const workingHours = createTextElement('p', 'We are always open');
  const species = createTextElement('p', 'All species are welcome<y>*</y>');
  const bottomText = createTextElement(
    'p',
    '<y>*</y>the Ur-Quan will be forcefully escorted from the premises',
    'bottom-text'
  );
  appendChildren(
    content,
    image,
    header,
    description,
    workingHours,
    species,
    bottomText
  );
}

// utility

function appendChildren(parent, ...children) {
  [...children].forEach((child) => parent.appendChild(child));
}

// image

function createHomeImage() {
  const image = document.createElement('img');
  image.classList.add('img-home');
  image.src =
    'img/j-otto-szatmari-daygonebar-spacestation-jottoszatmari2016.jpg';
  image.alt = 'Bar - Space Station by J.Otto Szatmari';
  return image;
}

// text elements

function createTextElement(tag, text, cssClass) {
  const element = document.createElement(tag);
  element.innerHTML = text;
  if (cssClass) element.classList.add(cssClass);
  return element;
}

export default loadHomeTab;
