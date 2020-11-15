import React from 'react';
import Header from '../component/Header/index';
import Footer from '../component/Footer/index';

function CoverPage() {
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
                            <a className="nav-link page-scroll" href="/" style={{ color: "white" }}>HOME <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="/about" style={{ color: "white" }}>ABOUT ME</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="/portfolio" style={{ color: "white" }}>PORTFOLIO</a>
                        </li>
                    </ul>

                </div>
            </nav>
            
            <Header />
            <Footer />

        </>



    )
}

export default CoverPage;