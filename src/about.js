import aboutimage from './assets/aboutimage.jpg';

const content = () => {
  const section = document.createElement('div');

  const heading = document.createElement('h3');
  const description = document.createElement('p');
  description.className = 'about-paragraph';

  section.classList.add('content');

  heading.innerText = 'Our Story';
  description.innerText = 'We welcome you to sit back, unwind and appreciate the lovely sights and hints of the ocean while our best gourmet expert sets you up a scrumptious dinner utilizing the best and freshest ingredients.The Aviary Cafe‘s legacy comes from The parent  Restaurant which was built up in 1963. The Aviary Cafe was worked for people in general and has advanced into a combination between exquisite chic and contemporary fine charge.';

  section.appendChild(heading);
  section.appendChild(description);
  return section;
};
const imageContainer = () => {
  const section = document.createElement('div');

  const image = new Image();
  image.src = aboutimage;
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