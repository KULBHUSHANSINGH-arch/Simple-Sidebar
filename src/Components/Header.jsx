import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
function Header() {
  return (
    <section className="navbar-dark bg-dark header">
       <div className="container">
          <div className="row">
           <div className="col-sm-12"> 
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand text-white" href="#">JSR</a>
              <div className="navbar-nav">
                <a className="nav-link text-white" href="#about">About</a>
                <a className="nav-link text-white" href="#destinations">Destinations</a>
                <a className="nav-link text-white" href="#places">Places</a>
                <a className="nav-link text-white" href="#tourist">Tourists Detail</a>
              </div>
            </nav>
            </div>
          </div>
        </div>
    </section> 
  );
}

export default Header;
