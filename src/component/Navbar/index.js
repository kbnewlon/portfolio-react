import React from 'react';


function Navbar() {
    return (
        <>

<nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
       

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-awesome fas fa-bars"></span>
            <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>
 
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#header">HOME <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#intro">INTRO</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#projects">PROJECTS</a>
                </li>
            </ul>

                <span className="nav-item social-icons">
                    <span className="fa-stack">
                        <a href="#your-link">
                            <span className="hexagon"></span>
                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                        </a>
                    </span>
                    <span className="fa-stack">
                        <a href="#your-link">
                            <span className="hexagon"></span>
                            <i className="fab fa-twitter fa-stack-1x"></i>
                        </a>
                    </span>
                </span>
        </div>
</nav>
  

        
        
        </>
    )
}

export default Navbar;