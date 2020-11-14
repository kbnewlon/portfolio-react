import React from 'react';


function Project() {
  return (
    <>


      <div id="projects" className="filter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">PROJECTS</div>
              <h2>Projects That I'm Proud Of</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">

              <div className="grid">
                <div className="element-item development">
                  <a className="popup-with-move-anim" href="#project-1">
                    <div className="element-item-overlay"><span>The Cold West Tour Co.</span></div><img
                      src="images/cold-west-home-img.jpg" alt="alternative" />
                  </a>
                </div>
                <div className="element-item development">
                  <a className="popup-with-move-anim" href="#project-2">
                    <div className="element-item-overlay"><span>It's Come to This:<br />A Virtual Burger App</span></div>
                    <img src="images/burger_app_pic.png" alt="alternative" />
                  </a>
                </div>
                <div className="element-item design development marketing">
                  <a className="popup-with-move-anim" href="#project-3">
                    <div className="element-item-overlay"><span>Content Management System</span></div><img
                      src="images/screenshot_employee_tracker_small.PNG" alt="alternative" />
                  </a>
                </div>
                <div className="element-item design development marketing">
                  <a className="popup-with-move-anim" href="#project-4">
                    <div className="element-item-overlay"><span>Covid-19 Resource Page</span></div><img
                      src="images/screenshot_covid_resources.jpg" alt="alternative" />
                  </a>
                </div>



              </div>
            </div>
          </div>
        </div>
      </div>



      <div id="project-1" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-8">
            <br /><br />
            <br /><br />
            <img className="img-fluid" src="images/screenshot_homepage.PNG" alt="alternative" />
            <br /><br />
            <a className="btn-solid-reg" href="https://github.com/kbnewlon/Cold-West-Tours">GO TO GITHUB REPO</a>
            <a className="btn-solid-reg" href="https://the-cold-west.herokuapp.com/">GO TO DEPLOYED APP</a><a className="btn-outline-reg mfp-close as-button"
              href="#projects">BACK</a>
          </div>

          <div className="col-lg-4">
            <h3>The Cold West Tour Co</h3>
            <hr className="line-heading" />
            <h6>MySQL2, Express, Handlebars, Sequelize</h6>
            <p>Join The Cold West Tours this winter and find your perfect outdoor activity for every mood, style, and condition. Your adventure awaits.</p>
            <p>Our team has together all ten ski and snowboard resorts in Washington State. Start your winter sport planning here! Create an account with us to save your favorite winter activity and favorite lodge. On each resort page you will find a stunning gallery of the mystical powder at each slope. Farther down you'll find information such as an overview, map, certain policies to keep in mind and available activities. Each respective activity page includes more beautiful pictures of the action, a quick about blurb describing the activity and a beginner's guide to jumping in a new sport. We hope you like it!</p>


          </div>
        </div>
      </div>


      <div id="project-2" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-8">
            <img className="img-fluid" src="images/screenshot_burger_app.PNG" alt="alternative" />
            <br />
            <a className="btn-solid-reg" href="https://github.com/kbnewlon/burger">GO TO GITHUB REPO</a>
            <a className="btn-solid-reg" href="https://a-virtual-burger-shack.herokuapp.com/">GO TO DEPLOYED APP</a><a className="btn-outline-reg mfp-close as-button"
              href="#projects">BACK</a>
          </div>
          <div className="col-lg-4">
            <h3>It's Come To This: A Virtual Burger Shack</h3>
            <hr className="line-heading" />
            <h6>MySQL, Node, Express, Handlebars, ORM</h6>
            <p>Quarantine keeping you from eating what you really want? This virtual burger application combines the use MySQL, Node, Express, Handlebars, as well as its very own homemade ORM (yum!) Don't bother with those pesky germs, Use this app to create and DEVOUR your very own virtual burger. Bon appetit!</p>
          </div>
        </div>
      </div>

      <div id="project-3" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-8">
            <img className="img-fluid" src="images/screenshot_employee_tracker.PNG" alt="alternative" />
            <br /><br />
            <a className="btn-solid-reg" href="https://github.com/kbnewlon/employee-tracker">GO TO GITHUB REPO</a>
            <a className="btn-solid-reg" href="https://a-virtual-burger-shack.herokuapp.com/">GO TO DEPLOYED APP</a>
            <a className="btn-outline-reg mfp-close as-button"
              href="#projects">BACK</a>
          </div>
          <div className="col-lg-4">
            <h3>Content Management System</h3>
            <hr className="line-heading" />
            <h6>Node, Inquirer, MySQL</h6>
            <p>An easy to use interface for non-developers to view and interact with information stored in databases.
            This command-line application allows users to:
                                  <ul>
                <li>Add departments, roles, employees</li>
                <li>View departments, roles, employees</li>
                <li>Update employee roles</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div id="project-4" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-8">
            <img className="img-fluid" src="images/screenshot_covid_tracker.png" alt="alternative" />
            <br /><br />
            <a className="btn-solid-reg" href="https://github.com/jjainga/Covid-19-Resource-Page">GO TO GITHUB REPO</a>
            <a className="btn-solid-reg" href="https://jjainga.github.io/Covid-19-Resource-Page/">GO TO DEPLOYED APP</a><a className="btn-outline-reg mfp-close as-button"
              href="#projects">BACK</a>
          </div>
          <div className="col-lg-4">
            <h3>Covid-19 Resource Page</h3>
            <hr className="line-heading" />
            <h6>APIs, Pure.CSS, Interactive</h6>
            <p> This application was developed to monitor the density of COVID-19 cases by county as well as to give the user resources for the pandemic. Along with an interactive map of active cases, we have supplied a COVID-19 testing location finder, recent top peer reviewed articles related to the virus as well as a link to the Centers for Disease Control and Prevention (CDC) homepage. This application is meant to be your hub for information about the Coronavirus pandemic.</p>
          </div>
        </div>
      </div>

      <div id="project-5" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-8">
            <img className="img-fluid" src="images/project-5.jpg" alt="alternative" />
          </div>
          <div className="col-lg-4">
            <h3>Joy Moments</h3>
            <hr className="line-heading" />
            <h6>Strategy Development</h6>
            <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
            <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
            <div className="testimonial-container">
              <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
              <p className="testimonial-author">General Manager</p>
            </div>
            <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button"
              href="#projects">BACK</a>
          </div>
        </div>
      </div>


      <div id="project-6" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-8">
            <img className="img-fluid" src="images/project-6.jpg" alt="alternative" />
          </div>
          <div className="col-lg-4">
            <h3>Spark Events</h3>
            <hr className="line-heading" />
            <h6>Strategy Development</h6>
            <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
            <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
            <div className="testimonial-container">
              <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
              <p className="testimonial-author">General Manager</p>
            </div>
            <a className="btn-solid-reg" href="#your-link">DETAILS</a><a className="btn-outline-reg mfp-close as-button"
              href="#projects">BACK</a>
          </div>
        </div>
      </div>



      <div id="project-7" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-8">
            <img className="img-fluid" src="images/project-7.jpg" alt="alternative" />
          </div>

          <div className="col-lg-4">
            <h3>Casual Wear</h3>
            <hr className="line-heading" />
            <h6>Strategy Development</h6>
            <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
            <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
            <div className="testimonial-container">
              <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
              <p className="testimonial-author">General Manager</p>
            </div>
            <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button"
              href="#projects">BACK</a>
          </div>
        </div>
      </div>



      <div id="project-8" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-8">
            <img className="img-fluid" src="images/project-8.jpg" alt="alternative" />
          </div>

          <div className="col-lg-4">
            <h3>Zazoo Apps</h3>
            <hr className="line-heading" />
            <h6>Strategy Development</h6>
            <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
            <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
            <div className="testimonial-container">
              <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
              <p className="testimonial-author">General Manager</p>
            </div>
            <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button"
              href="#projects">BACK</a>
          </div>
        </div>
      </div>



    </>



  )
}



export default Project;