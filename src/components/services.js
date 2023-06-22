import React from "react";
import "./services.css";
import icon1 from '../images/Group 10.png';
import icon2 from '../images/star_circle.jpeg';
import icon3 from '../images/crown_ellipse.jpeg';
import icon4 from '../images/bar_ellipse.jpeg';
import icon5 from '../images/pichart_ellipse.jpeg';
import icon6 from '../images/figma_ellipse.jpeg'

function Services() {
    return (
        <div className="services-container">
            <section className="serv-container">
                <h1>Lorem ipsum dolor sit amet
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat orci ac consequat tempor. Donec venenatis malesuada justo, quis congue elit dignissim sed, Vivamus rhoncus.
                </p>
            </section>
            <section className="icons-flexbox">
                <div id='first'>
                    <img src={icon1} alt='lorem'/>
                    <h2>Document Analysis</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div id="second">
                    <img src ={icon2} alt='ipsum'/>
                    <h2>Acceptance and Evaluation</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div id="third">
                    <img src={icon3} alt='dolor'/>
                    <h2>Business rules Analysis</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div id='fourth'>
                    <img src ={icon4} alt='sit'/>
                    <h2>this is the fourth service.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div id='fifth'>
                    <img src={icon5} alt='amet'/>
                    <h2>this is the fifth service.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div id='sixth'>
                    <img src={icon6} alt='contectorur'/>
                    <h2>this is the sixth service.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Services;