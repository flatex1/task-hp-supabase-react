// src/components/MainBlockFourth.jsx

import React, { useState } from 'react';
import '../assets/css/main.css';

const pancakeData = [
  {
    title: 'Vanilla Pancakes',
    description: 'Delicious vanilla flavored pancakes served with fresh berries and a drizzle of maple syrup.',
    imgSrc: 'https://aushniidrgdnhohvezpw.supabase.co/storage/v1/object/public/images/specialty.png',
  },
  {
    title: 'Chocolate Pancakes',
    description: 'Rich chocolate pancakes topped with whipped cream and chocolate shavings.',
    imgSrc: 'https://aushniidrgdnhohvezpw.supabase.co/storage/v1/object/public/images/specialty.png',
  },
  {
    title: 'Hazelnut Pancakes',
    description: 'Pancakes infused with hazelnut flavor, served with a dollop of hazelnut spread.',
    imgSrc: 'https://aushniidrgdnhohvezpw.supabase.co/storage/v1/object/public/images/specialty.png',
  },
];

const MainBlockFourth = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="main-block main-block-fourth">
      <div className="container">
        <div className="specialties-main clearfix">
          <div className="mini-logo">specialties</div>
          <div className="slider-container" style={{ transform: `translateX(-${activeSlide * 1280}px)` }}>
            {pancakeData.map((pancake, index) => (
              <div key={index} className="main-block-slider">
                <div className="main-block-info-right">
                  <h2 className="main-block-title">{pancake.title}</h2>
                  <p className="main-block-pre-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</p>
                  <p className="main-block-text">{pancake.description}</p>
                </div>
                <div className="main-block-border-element-left">
                  <img className="main-block-img" src={pancake.imgSrc} alt={pancake.title} width="575" height="575" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="slider-buttons">
          {pancakeData.map((_, index) => (
            <div
              key={index}
              className={`slider-button ${index === activeSlide ? 'active' : ''}`}
              onClick={() => handleSlideChange(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainBlockFourth;
