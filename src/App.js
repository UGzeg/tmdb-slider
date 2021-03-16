import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="slider">
      <div className="sliderHeader">
        <div className="sliderTitle">
          Popüler Olanlar
        </div>
        <div className="sliderTab">
          <a href="#">Tab 1</a>
          <a href="#">Tab 2</a>
          <a href="#">Tab 3</a>
        </div>
      </div>
      <div className="sliderBody">
        <div className="sliderItem"></div>
        <div className="sliderItem"></div>
        <div className="sliderItem"></div>
        <div className="sliderItem"></div>
        <div className="sliderItem"></div>
      </div>
      </div>
    </div>
  );
}

export default App;
