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

  homeContainer.appendChild(specialsSection());

  homeContainer.appendChild(about());

  return homeContainer;
};
export default homePage;
