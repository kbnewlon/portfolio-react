import React from 'react';


function Header() {
    return (
        <>

            <div className="spinner-wrapper">
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>





            <header id="header" className="header">
                <div className="header-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-container">
                                    <h1>WEB DEVELOPMENT: <span id="js-rotating">HTML5, CSS3, JAVASCRIPT, JQUERY, BOOTSTRAP, EXPRESS.JS, REACT.JS, NODE.JS, MONGODB, MYSQL, GIT</span></h1>
                                    <p className="p-heading p-large"> Full Stack Developer: Kayla B. Newlon</p>
                                    <a className="btn-solid-lg page-scroll" href="#intro">LEARN MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;