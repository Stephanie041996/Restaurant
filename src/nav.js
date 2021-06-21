const navbar = () => {
    const navLinks = ['Home', 'Menu', 'Contact'];

    const nav = document.createElement('ul');
    nav.className = 'nav  pb-2';
    nav.innerHTML += "<h5 class='Prime Cafe</h5>";
  
      const li = document.createElement('li');
      li.className = 'nav-item ';
      const a = document.createElement('a');
     
      a.innerHTML = 'Home';
      a.className = 'nav-link';
      a.id = 'home';
      li.append(a);
      nav.append(li);
    
      const lii = document.createElement('li');
      lii.className = 'nav-item ';
      const aa = document.createElement('a');
     
      aa.innerHTML = 'Menu';
      aa.className = 'nav-link';
      aa.id = 'menu';
      lii.append(aa);
      nav.append(lii);
  
      const liii = document.createElement('li');
      liii.className = 'nav-item ';
      const aaa = document.createElement('a');
     
      aaa.innerHTML = 'Contact';
      aaa.className = 'nav-link';
      aaa.id = 'contact';
      liii.append(aaa);
      nav.append(liii);
    return nav;
  };
  
  export default navbar;