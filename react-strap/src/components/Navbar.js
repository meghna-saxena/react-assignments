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
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul> 
                </div>
              </div>
            </nav>
    );
}

export default NavBar;