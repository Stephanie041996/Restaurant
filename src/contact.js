const contactPage = () => {

    const contactSection = document.createElement('div');
    const form = document.createElement('form');
    form.actinon = '#';
    form.innerHTML = `
    <div>
      <div class="container">
          <div class="row justify justify-content-center">
              <div class="col-11 col-md-8 col-lg-6 col-xl-5">
                  <form class="">
                      <div>
                          <div class="row mt-0">
                              <div class="col-md-12 ">
                                  <p>Conatact Us to book a table or make an enquiry</p>
                              </div>
                          </div>
                          <div class="form-group row mb-3">
                              <div class="col-md-12 mb-0">
                                  <p class="mb-1">Email</p> <input id="e-mail" type="text" placeholder="Enter your email" name="email" class="form-control input-box rm-border">
                              </div>
                          </div>
                          <div class="form-group row">
                              <div class="col-md-12 mb-2">
                                  <p class="mb-1">Message</p> <textarea id="message" type="text" placeholder="Enter your message" name="message" class="form-control input-box rm-border"></textarea>
                              </div>
                          </div>
                          <div class="form-group row justify-content-center mb-0">
                              <div class="col-md-12 px-3"> <input type="submit" value="Submit" class="btn btn-block btn-purple rm-border"> </div>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
    `;
    contactSection.appendChild(form);
    return contactSection
};


export default contactPage;