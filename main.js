(()=>{"use strict";const e=()=>{const e=document.createElement("div");return e.classList.add("specials-section"),e.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("h3");return t.className="text-center",e.classList.add("title-section"),t.innerText="Our Specials",e.appendChild(t),e})()),e.appendChild((()=>{const e=document.createElement("div");return e.classList.add("specials-row"),e.appendChild((()=>{const e=document.createElement("div");e.className="card";const t=new Image;t.src="../src/meal3.jpeg",t.className="image-specials",t.style.width="100%";const n=document.createElement("p");return n.className="text-center",n.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo.",e.appendChild(t),e.appendChild(n),e})()),e.appendChild((()=>{const e=document.createElement("div");e.className="card";const t=new Image;t.src="../src/meal1.jpeg",t.className="image-specials",t.style.width="100%";const n=document.createElement("p");return n.className="text-center",n.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo.",e.appendChild(t),e.appendChild(n),e})()),e.appendChild((()=>{const e=document.createElement("div");e.className="card";const t=new Image;t.src="../src/meal2.jpeg",t.className="image-specials",t.style.width="100%";const n=document.createElement("p");return n.className="text-center",n.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo.",e.appendChild(t),e.appendChild(n),e})()),e})()),e},t=()=>{const t=document.createElement("div"),n=document.createElement("div");n.className="container-fluid ";const c=document.createElement("h2");return c.className="text-center first-page-text",c.innerText="Prime Cafe",n.appendChild(c),t.appendChild(n),t.appendChild(e()),t.appendChild((()=>{const e=document.createElement("div");return e.classList.add("about"),e.appendChild((()=>{const e=document.createElement("div"),t=new Image;return t.src="../src/about.jpeg",t.className="image-about",e.appendChild(t),e})()),e.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("h3"),n=document.createElement("p"),c=document.createElement("button");return e.classList.add("content"),t.innerText="About Us",n.innerText="We server the best food in town , stop by anytime for one of our hot meals",c.innerText="View More",e.appendChild(t),e.appendChild(n),e.appendChild(c),e})()),e})()),t},n=()=>{const e=document.createElement("div"),t=document.createElement("div");t.className="container-fluid";const n=document.createElement("h2");return n.className="text-center menu-text",n.innerText="Our Menu",t.appendChild(n),e.appendChild(t),e.appendChild((()=>{const e=document.createElement("div");return e.className="menu-item-large",e.appendChild((()=>{const e=document.createElement("div");return e.className="section-menu",[{head:"Roast Chicken",pri:"$20",descript:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{head:"Roast Chicken",pri:"$20",descript:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{head:"Roast Chicken",pri:"$20",descript:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{head:"Roast Chicken",pri:"$20",descript:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{head:"Roast Chicken",pri:"$20",descript:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{head:"Roast Chicken",pri:"$20",descript:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}].forEach((t=>{const n=document.createElement("div");n.className="menu";const c=document.createElement("div");c.className="menu-item";const a=document.createElement("h5");a.className="menu-heading-item",a.append(t.head);const i=document.createElement("p");i.className="menu-price-item",i.append(t.pri),c.appendChild(a),c.appendChild(i);const d=document.createElement("p");d.className="text",d.append(t.descript),n.appendChild(c),n.appendChild(d),e.appendChild(n)})),e})()),e.appendChild((()=>{const e=document.createElement("div");return e.className="section-menu",[{head:"Roast Chicken",pri:"$20",descript:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{head:"Roast Chicken",pri:"$20",descript:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{head:"Roast Chicken",pri:"$20",descript:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{head:"Roast Chicken",pri:"$20",descript:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{head:"Roast Chicken",pri:"$20",descript:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{head:"Roast Chicken",pri:"$20",descript:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}].forEach((t=>{const n=document.createElement("div");n.className="menu";const c=document.createElement("div");c.className="menu-item";const a=document.createElement("h5");a.className="menu-heading-item",a.append(t.head);const i=document.createElement("p");i.className="menu-price-item",i.append(t.pri),c.appendChild(a),c.appendChild(i);const d=document.createElement("p");d.className="text",d.append(t.descript),n.appendChild(c),n.appendChild(d),e.appendChild(n)})),e})()),e})()),e},c=document.createElement("div");c.id="content",document.body.appendChild(c);const a=document.createElement("div");c.appendChild((()=>{const e=document.createElement("ul");e.className="nav  pb-2",e.innerHTML+="<h5 class='Prime Cafe</h5>";const t=document.createElement("li");t.className="nav-item ";const n=document.createElement("a");n.innerHTML="Home",n.className="nav-link",n.id="home",t.append(n),e.append(t);const c=document.createElement("li");c.className="nav-item ";const a=document.createElement("a");a.innerHTML="Menu",a.className="nav-link",a.id="menu",c.append(a),e.append(c);const i=document.createElement("li");i.className="nav-item ";const d=document.createElement("a");return d.innerHTML="Contact",d.className="nav-link",d.id="contact",i.append(d),e.append(i),e})()),c.appendChild(a),a.appendChild(t()),(()=>{const e=document.getElementById("home"),c=document.getElementById("menu"),i=document.getElementById("contact");c.addEventListener("click",(()=>{a.innerHTML="",a.appendChild(n())})),e.addEventListener("click",(()=>{a.innerHTML="",a.appendChild(t())})),i.addEventListener("click",(()=>{a.innerHTML="",a.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("form");return t.actinon="#",t.innerHTML='\n    <div>\n      <div class="container">\n          <div class="row justify justify-content-center">\n              <div class="col-11 col-md-8 col-lg-6 col-xl-5">\n                  <form class="">\n                      <div>\n                          <div class="row mt-0">\n                              <div class="col-md-12 ">\n                                  <p>Use the form below to share your questions, ideas, comments and feedback</p>\n                              </div>\n                          </div>\n                          <div class="form-group row mb-3">\n                              <div class="col-md-12 mb-0">\n                                  <p class="mb-1">Email</p> <input id="e-mail" type="text" placeholder="Enter your email" name="email" class="form-control input-box rm-border">\n                              </div>\n                          </div>\n                          <div class="form-group row">\n                              <div class="col-md-12 mb-2">\n                                  <p class="mb-1">Message</p> <textarea id="message" type="text" placeholder="Enter your message" name="message" class="form-control input-box rm-border"></textarea>\n                              </div>\n                          </div>\n                          <div class="form-group row justify-content-center mb-0">\n                              <div class="col-md-12 px-3"> <input type="submit" value="Submit" class="btn btn-block btn-purple rm-border"> </div>\n                          </div>\n                      </div>\n                  </form>\n              </div>\n          </div>\n      </div>\n  </div>\n    ',e.appendChild(t),e})())}))})()})();