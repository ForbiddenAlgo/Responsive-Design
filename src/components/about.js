import React from "react";
import './about.css';
import photo1 from '../images/Illustration.jpg';
import photo2 from '../images/Illustration (1).jpg';

function About (){
    return (
        <div className="about-container">
            <section className="acontainer1">
                <img src = {photo1} alt='one'/>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat orci ac consequat tempor. Donec venenatis malesuada justo, quis congue elit dignissim sed. Vivamus rhoncus dignissim sem, quis tempus neque vulputate ac. Curabitur hendrerit placerat augue commodo pulvinar. Mauris efficitur venenatis justo sed imperdiet.</p>
                <button>know more</button>
            </section>
            <section className="acontainer2">
                <img src ={photo2} alt='two'/>
                <h1>lorem ipsum dolor sit amet</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat orci ac consequat tempor. Donec venenatis malesuada justo, quis congue elit dignissim sed. Vivamus rhoncus dignissim sem, quis tempus neque vulputate ac. Curabitur hendrerit placerat augue commodo pulvinar. Mauris efficitur venenatis justo sed imperdiet.</p>
                <button>know more</button>
            </section>
        </div>
    );
}

export default About;