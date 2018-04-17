import React from 'react';

const NavBar = (props) => {
    return (
            <nav className="navbar navbar-default">
              <div className="container">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">{props.brand}</a>
                </div>
                <div id="navbar">
                  <ul className="nav navbar-nav">
                    <li className={(props.currentPage === 'home') ? 'active' : ''}><a onClick={props.click.bind(this, 'home')} href="#">Home</a></li>
                    <li className={(props.currentPage === 'about') ? 'active' : ''}><a onClick={props.click.bind(this, 'about')} href="#">About</a></li>
                    <li className={(props.currentPage === 'contact') ? 'active' : ''}><a onClick={props.click.bind(this, 'contact')} href="#">Contact</a></li>
                  </ul> 
                </div>
              </div>
            </nav>
    );
}

export default NavBar;