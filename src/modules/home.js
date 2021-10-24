function loadHomeContent() {
  const content = document.querySelector('.js-content');
  content.innerHTML = '';

  const image = createHomeImage();

  const header = document.createElement('h2');
  header.textContent = "Welcome to Saul Dyson's Bar!";

  const p1 = document.createElement('p');
  p1.innerHTML =
    'With a spectacular dancing floor harboring the best DJs from all over the solar the system and a million energy credit view of a recently build < strong > Dyson sphere</ >, enjoy a wide variety of unique meals that would satisfy even the most sophisticated digestive systems in the galaxy.';

  const p2 = document.createElement('p');
  p2.textContent = 'We are always open';

  const p3 = document.createElement('p');
  p3.innerHTML = 'All species are welcome<y>*</y>';

  const bottomText = document.createElement('p');
  bottomText.classList.add('bottom-text');
  bottomText.innerHTML =
    '<y>*</y>the Ur-Quan will be forcefully escorted from the premises';

  const elements = [image, header, p1, p2, p3, bottomText];
  elements.forEach((el) => content.appendChild(el));
}

function createHomeImage() {
  const image = document.createElement('img');
  image.classList.add('img-home');
  image.src =
    'img/j-otto-szatmari-daygonebar-spacestation-jottoszatmari2016.jpg';
  image.alt = 'Bar - Space Station by J.Otto Szatmari';
  return image;
}

export { loadHomeContent };
