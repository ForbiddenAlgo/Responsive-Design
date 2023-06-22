import React from "react";
import './footer.css';
import Group8 from '../images/Group 8.png';

function Footer (){
    return (
        <div className="outline">
            <div className="container">
                <div className="grid-container">
                    <div className="grid-content">
                        <p>Solution and Services</p>
                        <div className="grid-info">
                            <p>Software Development</p>
                            <p>Outsourcing</p>
                            <p>Quality and Process Management</p>
                            <p>Consultancy</p>
                            <p>IoT Supported Solutions</p>
                        </div>
                    </div>
                    <div className="grid-content2">
                        <p>Products</p>
                        <div className="grid-info2">
                            <p>Education Management System</p>
                            <p>Human Capital Management System</p>
                            <p>Customer Relationship Management System</p>
                            <p>Content Management System</p>
                        </div>
                    </div>
                    <div className="grid-content3">
                        <p>Institutional</p>
                        <div className="grid-info3">
                            <p>About Us</p>
                            <p>Documents and Competencies</p>
                            <p>Work Partners</p>
                        </div>
                    </div>
                    <div className="grid-content4">
                        <p>Communication</p>
                        <div className="grid-info4">
                            <p>Information Request Form</p>
                            <p>Expert Request Form</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <p>© Copyright 2010-2021 - Can Çevik</p>
                </div>
                <div className="img">
                    <img src={Group8} alt=""></img>
                </div>
            </div>
        </div>
    );
}

export default Footer;