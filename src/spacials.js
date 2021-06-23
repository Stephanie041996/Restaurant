import meal2 from './assets/meal2.jpeg';
import meal1 from './assets/meal1.jpeg';
import meal3 from './assets/meal3.jpeg';

const titleSec = () => {
  const title = document.createElement('div');

  const description = document.createElement('h3');
  description.className = 'text-center';

  title.classList.add('title-section');

  description.innerText = 'Our Specials';
  title.appendChild(description);

  return title;
};

const imageContainer1 = () => {
  const cards = document.createElement('div');
  cards.className = 'card';
  const image = new Image();
  image.src = meal3;
  image.className = 'image-specials';
  image.style.width = '100%';

  const description = document.createElement('p');
  description.className = 'text-center';
  description.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo.';

  cards.appendChild(image);
  cards.appendChild(description);
  return cards;
};

const imageContainer2 = () => {
  const cards = document.createElement('div');
  cards.className = 'card';
  const image = new Image();
  image.src = meal1;
  image.className = 'image-specials';
  image.style.width = '100%';

  const description = document.createElement('p');
  description.className = 'text-center';
  description.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo.';

  cards.appendChild(image);
  cards.appendChild(description);
  return cards;
};

const imageContainer3 = () => {
  const cards = document.createElement('div');
  cards.className = 'card';
  const image = new Image();
  image.src = meal2;
  image.className = 'image-specials';
  image.style.width = '100%';

  const description = document.createElement('p');
  description.className = 'text-center';
  description.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo.';

  cards.appendChild(image);
  cards.appendChild(description);
  return cards;
};

const specials = () => {
  const specialsBar = document.createElement('div');

  specialsBar.classList.add('specials-row');

  specialsBar.appendChild(imageContainer1());
  specialsBar.appendChild(imageContainer2());
  specialsBar.appendChild(imageContainer3());

  return specialsBar;
};

const specialsSection = () => {
  const specialsSection = document.createElement('div');

  specialsSection.classList.add('specials-section');

  specialsSection.appendChild(titleSec());
  specialsSection.appendChild(specials());

  return specialsSection;
};
export default specialsSection;
