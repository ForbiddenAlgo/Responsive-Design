import React from 'react';
import './top.css';

function TopComponent() {
  return (
    <div className="top-container">
      
      <header className="top-header">
        <h1>23 Years of Experience in
                Information Technologies
        </h1>
        <p>
          We provide Project Management, Business Analysis and Test Management services with our expert staff who have gained experience in different sectors so that our customers can maintain their high quality levels.
        </p>
      </header>
      <div className="nav-container">
        <ul>
          <li className="custom">Solution & Services</li>
          <li>Products</li>
          <li>Technologies</li>
          <li>HumanResources</li>
          <li>Institutional</li>
          <li>Communication</li>
        </ul>
      </div>
      <section className="input-container">
        <p>Input email</p>
        <button className="input-button">
          submit
        </button>
      </section>
    </div>
  );
}

export default TopComponent;