import meal2 from './assets/meal2.jpeg';
import meal1 from './assets/meal1.jpeg';
import meal3 from './assets/meal3.jpeg';


const titleSec = () => {
  const title = document.createElement('div');

  const description = document.createElement('h3');
  description.className = 'text-center specials-text-title';

  title.classList.add('title-section');

  description.innerText = 'Our Specials';
  title.appendChild(description);

  return title;
};

const imageContainer1 = () => {
  const cards = document.createElement('div');
  cards.className = 'card';
  const image = new Image();
  image.src = meal1;
  image.className = 'image-specials';
  image.style.width = '100%';

  const description = document.createElement('p');
  description.className = 'text-center p-3';
  description.innerText = 'A chocolate brownie base topped with a rich chocolate & orange mousse and chocolate crumb, served with a scoop of vanilla non-dairy iced dessert';
  cards.appendChild(image);
  cards.appendChild(description);
  return cards;
};

const imageContainer2 = () => {
  const cards = document.createElement('div');
  cards.className = 'card';
  const image = new Image();
  image.src = meal3;
  image.className = 'image-specials';
  image.style.width = '100%';

  const description = document.createElement('p');
  description.className = 'text-center p-3';
  description.innerText = 'Sweet potato & mixed vegetables in an aromatic coconut broth. Served with golden rice, garnished with fresh lime, chilli, spring onion and a flour tortilla';

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
  description.className = 'text-center p-3';
  description.innerText = 'Guacamole and salsa, topped with two poached free-range eggs and crumbled feta, on a toasted breakfast muffin';

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