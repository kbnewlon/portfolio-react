import React from 'react';

function About() {
    return (
        <>
           

                <div id="intro" className="basic-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="text-container">
                                    <div className="section-title">ABOUT ME</div>
                                    <h2>Full Stack Developer</h2>
                                    <p>Full Stack Web Developer with a background leading diverse teams in the hospitality industry,
                                    Graduate of the University of Washington Coding Bootcamp with skills in browser-based
                                    technologies. I applied aspects of Sequelize, MySQL, Node, JavaScript, HTML and CSS to make
                                    a winter activity resource app compiling the Ski and Snowboard resorts in Washington State.
                                    I am instrumental in streamlining and improving processes, enhancing company productivity,
                                    and implementing strategic solutions. With my history in Cultural Anthropology, Recreation
                                    and Ecotourism I am very passionate about creating tools for education and sustainability.
                        </p>
                                    <p className="testimonial-text">"To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other, and to feel. That is the purpose of life."</p>
                                    <div className="testimonial-author">Walter Mitty</div>
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <div className="image-container">
                                    <img className="img-fluid" src="images/ProfilePic.jpg" alt="Kayla Newlon profile image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cards-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">


                                <div className="card">
                                    <span className="fa-stack">
                                        <span className="hexagon"></span>
                                        <i className="fas fa-binoculars fa-stack-1x"></i>
                                    </span>
                                    <div className="card-body">
                                        <h4 className="card-title">Resume</h4>
                                        <p>Click <a href="assets/Kayla-Newlon-Full-Stack-Development-Resume.pdf">here</a> to view my resume</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4">
                                <div className="card">
                                    <span className="fa-stack">
                                        <span className="hexagon"></span>
                                        <i className="fas fa-list-alt fa-stack-1x"></i>
                                    </span>
                                    <div className="card-body">
                                        <h4 className="card-title">Github</h4>
                                        <p>Click <a href="https://github.com/kbnewlon" target="_blank">here</a> to view my Github profile</p>

                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4">
                                <div className="card">
                                    <span className="fa-stack">
                                        <span className="hexagon"></span>
                                        <i className="fas fa-chart-pie fa-stack-1x"></i>
                                    </span>
                                    <div className="card-body">
                                        <h4 className="card-title">LinkedIn</h4>
                                        <p>Click <a href="https://www.linkedin.com/in/kayla-newlon/" target="_blank">here</a> to view my LinkedIn profile</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div> 
    

          


                    
               
    

        
        
        </>
    )
}

export default About;