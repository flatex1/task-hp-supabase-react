import React from 'react';
import '../assets/css/components.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <div className="nav-first">
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">team</a>
            <a href="#">booking</a>
          </div>
          <img className="header-logo" src="src/assets/img/header/header-logo.png" alt="logo" width="150" height="150" />
          <div className="nav-second">
            <a href="#">menu</a>
            <a href="#">events</a>
            <a href="#">contact</a>
            <a href="#" id="login-link">Login</a>
          </div>
        </div>
        <div className="header-main">
          <div className="work-schedule">Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</div>
          <div className="header-middle">
            <span className="pre-title">restaurant</span>
            <h1 className="title">hungry people</h1>
            <button className="btn btn-book" type="button">book table</button>
            <button className="btn btn-explore" type="button">explore</button>
          </div>
          <div className="social">
            <div className="social-icon fb-icon"></div>
            <div className="social-icon tw-icon"></div>
            <div className="social-icon in-icon"></div>
          </div>
        </div>
        <div className="outline-btn">
          <div className="scroll-down-btn"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
