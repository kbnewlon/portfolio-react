import React from 'react';
import './style.css';


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
                    <a className="nav-link page-scroll" href="/">HOME <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="/about">ABOUT ME</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link page-scroll" href="/portfolio">PORTFOLIO</a>
                </li>
            </ul>

        </div>
</nav>
        
        </>
    )
}

export default Navbar;