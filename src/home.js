import about from './about.js';
import specialsSection from './spacials.js';

const homePage = () => {
  const homeContainer = document.createElement('div');

  const banner = document.createElement('div');

  banner.className = 'container-fluid ';

  const heading = document.createElement('h2');
  heading.className = 'text-center first-page-text';
  heading.innerText = 'Prime Cafe';

  banner.appendChild(heading);
  homeContainer.appendChild(banner);

  // const specialsSection = document.createElement('div');

  // specialsSection.className = "container";

  // const specials = document.createElement('h3');
  // specials.className = 'text-center';
  // specials.innerText = 'Our Specials';
  // specialsSection.appendChild(specials);

  //   const cards = document.createElement('div')
  //   cards.className ='row row-cols-1 row-cols-md-3 g-4'
  //   const columns = document.createElement('div')
  //   columns.className = 'col figure'
  //   const image = new Image();
  //   image.src = "https://i.ibb.co/qMQ3n9k/restaurant.jpg";

  //   specialsSection.appendChild(cards);

  homeContainer.appendChild(specialsSection());

  homeContainer.appendChild(about());

  return homeContainer;
};
export default homePage;
