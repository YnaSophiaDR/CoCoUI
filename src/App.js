import React from 'react';
import logoCoco from './logoCoco.svg';
import "./App.css";
import Mango from './Mango';
import { mangoData } from './MangoData';

function App() {
  return (
    <div>
      <header>
        <img src={logoCoco} className="logo" alt="logo" />
        <div className="nav-links">
          <a href="#">OUR STORY</a>
          <a href="#" >MENU</a>
          <a href="#">LOCATIONS</a>
          <a href="#">DELIVERY</a>
          <a href="#">CAREERS</a>
          <a href="#">CONTACT US</a>
          <a href="#">FAQ</a>
        </div>
      </header>
      <div className="content">
        <img src="upperCoco.jpg" alt="Coco Upper" className="upperCoco" />
        <div className="sidebar">
          <h1>MENU</h1>
          <ul>
            <li className="orange"><strong>SEASONAL</strong></li>
            <li>MILKTEA</li>
            <li>FRUIT TEA</li>
            <li>FRESH TEA</li>
            <li>CREAM AND LATTE</li>
            <li>JUICE</li>
            <li>CHOCOLATE</li>
            <li>SLUSH</li>
            <li>COFFEE</li>
          </ul>
        </div>
        <div className="mango-container">
          {mangoData.map((mango, index) => (
            <Mango key={index} mangoObj={mango} />
          ))}
      </div>
    </div>
    <img src="bottomCoco.png" alt="Coco Bottom" className="bottomCoco" />
    </div>
    );
    
}

export default App;