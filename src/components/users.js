import React from "react";
import './users.css';
import users from '../images/Users.png';

function Users (){
    return (
        <div className="users-container">
            <section className="user-container">
                <img src={users} alt="users"/>
                <h1>lorem ipsum dolor</h1>
                <p>sdkfjoisd sjfsodif sjfd sjfsdk sdij.</p>
            </section>
            <button>lorem ipsum</button>
        </div>
    );
}

export default Users;