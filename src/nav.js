const navbar = () => {
    const navLinks = ['Home', 'Menu', 'Contact'];
    // navLinks.forEach((item, index)=>{
    //     item.id = index+1;
    //    });
    const nav = document.createElement('ul');
    nav.className = 'nav  pb-2';
    nav.innerHTML += "<h5 class='Prime Cafe</h5>";
  
    // navLinks.forEach((link, index) => {
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
  
    return nav;
  };
  
  export default navbar;