import aboutimage from './assets/aboutimage.jpeg';

const content = () => {
  const section = document.createElement('div');

  const heading = document.createElement('h3');
  const description = document.createElement('p');
  const view = document.createElement('button');

  section.classList.add('content');

  heading.innerText = 'About Us';
  description.innerText = 'We server the best food in town , stop by anytime for one of our hot meals';

  view.innerText = 'View More';

  section.appendChild(heading);
  section.appendChild(description);
  section.appendChild(view);
  return section;
};
const imageContainer = () => {
  const section = document.createElement('div');

  const image = new Image();
  image.src = '../assets/about.jpeg';
  image.className = 'image-about';

  section.appendChild(image);
  return section;
};

const about = () => {
  const aboutUs = document.createElement('div');

  aboutUs.classList.add('about');

  aboutUs.appendChild(imageContainer());
  aboutUs.appendChild(content());

  return aboutUs;
};

export default about;