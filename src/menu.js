const menuLunch = () => {
  const LunchMenu = [{
    head: 'The Classic Breakfast',
    pri: '$35',
    descript: 'Two pork sausages, two rashers of back bacon, your choice of fried, scrambled or poached free-range eggs, two hash browns, tomato, mushroom and Heinz® baked beans',
  },
  {
    head: 'The Veggie Breakfast',
    pri: '$17',
    descript: 'Two hash browns, two vegan sausages, tomato, mushroom, spicy sweetcorn fritter, Heinz® baked beans and your choice of fried, scrambled or poached free-range eggs',
  },
  {
    head: 'The Vegan Breakfast',
    pri: '$27',
    descript: 'Two hash browns, two vegan sausages, tomato, mushroom, Heinz® baked beans, guacamole and a toasted breakfast muffin',
  },
  {
    head: 'Chicken, Bacon & Waffles',
    pri: '$20',
    descript: 'Southern-fried chicken breast, a Belgian waffle and back bacon with maple-flavour syrup',
  },
  {
    head: 'Buttermilk Pancakes & Bacon',
    pri: '$18',
    descript: 'With three rashers of back bacon, drizzled with maple-flavour syrup',
  },
  {
    head: 'Eggs Benedict',
    pri: '$15',
    descript: 'Toasted breakfast muffin, two poached free-range eggs and back bacon, topped with hollandaise sauce',
  },
  ];
  const menuSection = document.createElement('div');
   menuSection.className = 'section-menu';
    const titlebreakfast = document.createElement('h3');
    titlebreakfast.className ='pb-3'
    titlebreakfast.innerText = 'Breakfast Menu';
    menuSection.appendChild(titlebreakfast);

  LunchMenu.forEach((x) => {
    const cards = document.createElement('div');
    cards.className = 'menu';
    const topy = document.createElement('div');
    topy.className = 'menu-item';

    const heading = document.createElement('h5');
    heading.className = 'menu-heading-item';
    heading.append(x.head);

    const price = document.createElement('p');
    price.className = 'menu-price-item';
    price.append(x.pri);

    topy.appendChild(heading);
    topy.appendChild(price);

    const description = document.createElement('p');
    description.className = 'text';
    description.append(x.descript);

    cards.appendChild(topy);
    cards.appendChild(description);
    menuSection.appendChild(cards);
  });

  return menuSection;
};

const menuDinner = () => {
  const LunchMenu = [{
    head: 'Smoked BBQ Pork Belly',
    pri: '$26',
    descript: 'Oak-smoked pork belly, slow-cooked for four hours, with spiked maple glaze, served with mash, green vegetables & bourbon shallot sauce',
  },
  {
    head: 'Pork Lunch Special',
    pri: '$20',
    descript: 'Spiked Maple glazed pork belly, a half rack of BBQ ribs and sticky Jim Beam BBQ chicken wings, mango & black bean salsa. Served with mac ‘n’ cheese and dirty fries topped with cheese sauce,crispy onion and bacon flavour crunch',
  },
  {
    head: 'The Original Chicken Combo',
    pri: '$32',
    descript: 'A quarter portion of our rotisserie chicken and half a rack of ribs glazed in our BBQ sauce. With sage & onion seasoned chips, buttered corn and our speciality chicken gravy',
  },
  {
    head: 'BBQ Chicken Stack',
    pri: '$25',
    descript: 'A chicken breast with Monterey Jack cheese, BBQ sauce, back bacon and three buttermilk-fried chicken tenders, with chips, slaw and buttered corn',
  },
  {
    head: 'Spicy Sweetcorn Fritters',
    pri: '$15',
    descript: 'Two smoked Cheddar & chilli sweetcorn fritters, topped with pineapple, mango & black bean salsa, guacamole and two fried free-range eggs. Drizzled with our Spiked Maple sauce',
  },
  {
    head: 'Vegan Spinach & Ricotta pasta ',
    pri: '$27',
    descript: 'Pasta shells filled with spinach, ricotta and artichoke, in a creamy tomato & basil sauce, topped with feta served with garlic ciabatta doughballs',
  },
  ];
  const menuSection = document.createElement('div');
  menuSection.className = 'section-menu';
  const titleLunch = document.createElement('h3');
  titleLunch.className = 'pb-3';
  titleLunch.innerText = 'Lunch Menu';
  menuSection.appendChild(titleLunch);

  LunchMenu.forEach((x) => {
    const cards = document.createElement('div');
    cards.className = 'menu';
    const topy = document.createElement('div');
    topy.className = 'menu-item';

    const heading = document.createElement('h5');
    heading.className = 'menu-heading-item';
    heading.append(x.head);

    const price = document.createElement('p');
    price.className = 'menu-price-item';
    price.append(x.pri);

    topy.appendChild(heading);
    topy.appendChild(price);

    const description = document.createElement('p');
    description.className = 'text';
    description.append(x.descript);

    cards.appendChild(topy);
    cards.appendChild(description);
    menuSection.appendChild(cards);
  });

  return menuSection;
};

const menus = () => {
  const all = document.createElement('div');
  all.className = 'menu-item-large';

  all.appendChild(menuLunch());
  all.appendChild(menuDinner());

  return all;
};

const menuPage = () => {
  const newMenu = document.createElement('div');
  const banner = document.createElement('div');

  banner.className = 'container-fluid menu-banner';

  const heading = document.createElement('h2');
  heading.className = 'text-center menu-text';
  heading.innerText = 'Our Menu';

  banner.appendChild(heading);
  newMenu.appendChild(banner);
  newMenu.appendChild(menus());
  return newMenu;
};

export default menuPage;