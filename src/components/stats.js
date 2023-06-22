import React from "react";
import './stats.css';
import caret_circle from '../images/CaretCircleDoubleRight.png';

function Stats (){
    return (
        <div className="stats-container">
            <section className="stat-container1">
            <h1>lorem ipsum dolor sit amet?</h1>
            <p> lorem ipsum color sit amet
            </p>
            </section>
            <section className="stat-container2">
                <div className="stat1">
                    <p>lorem ipsum dolor sit amet</p>
                </div>

                <div className="stat2">
                    <img src={caret_circle} alt="next"></img>
                </div>

                <div className="stat3">
                    <p>lorem ipsum dolor sit amet</p>
                </div>

                <div className="stat4">
                    <img src={caret_circle} alt='next'></img>
                </div>

                <div className="stat5">
                    <p>lorem ipsum dolor sit amet</p>
                </div>

                <div className="stat6">
                    <img src={caret_circle} alt='next'></img>
                </div>

                <div className="stat7">
                    <p>lorem ipsum dolor sit amet</p>
                </div>
            </section>
        </div>
    );
}

export default Stats;