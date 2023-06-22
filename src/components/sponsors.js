import React from "react";
import './sponsors.css';
// import airbnb from '../images/Airbnb Logo.png';
// import google from '../images/Google Logo.png';
// import bookmyshow from '../images/BookMyShow Logo.png';
// import ola from '../images/OLA Logo.png';
// import fedex from '../images/FedEx Logo.png';
// import amazon from '../images/Amazon Logo.png';
// import microsoft from '../images/Microsoft Logo.png';
// import oyo from '../images/OYO Logo.png';
// import walmart from '../images/Walmart Logo.png';
import logos from '../images/Logo Clouds/Logos.png';


function Sponsors () {
    return(
        <div className="sponsors-container">
            <div className="sponsors">
                <h1>Our References</h1>
                <p>Our business partners who trusts us</p>
            </div>
            <div className="logos">
                <img src={logos} alt=""></img>
            </div>
        </div>
    );
}

export default Sponsors;