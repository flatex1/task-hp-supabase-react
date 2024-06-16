import React from 'react';
import '../assets/css/components.css';

const MainBlock = () => {
  return (
    <div className="main-block main-block-first">
      <div className="container clearfix">
        <div className="main-block-info-left">
          <h2 className="main-block-title">about us</h2>
          <p className="main-block-pre-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</p>
          <p className="main-block-text">Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.</p>
        </div>
        <div className="main-block-border-element-right">
          <img className="main-block-img" src="src/assets/img/main/about.png" alt="About Us" width="575" height="575" />
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
