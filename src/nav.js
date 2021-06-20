const nav = () => {
    const navLinks = ['Home', 'Menu', 'Contact'];
  
    const nav = document.createElement('ul');
    nav.className = 'nav  pb-2';
    nav.innerHTML += "<h5 class='Prime Cafe</h5>";
  
    navLinks.forEach((link) => {
      const li = document.createElement('li');
      li.className = 'nav-item ';
      const a = document.createElement('a');
      a.href = `#${link.toLowerCase()}`;
      a.innerHTML = link;
      a.className = 'nav-link';
      li.append(a);
      nav.append(li);
    });
  
    return nav;
  };
  
  export default nav;