import React from 'react';
import './Style.css';



function Contact(props) {

        return (
            <div className="Contact">
                <img className="avatar"
                    src={props.image}
                    alt={props.name} />
                <div className="status">
                    <p class="name">
                        <h3>{props.name}</h3>
                    </p>
                    <box className={props.status ? "status-online" : "status-offline"} alt="online"></box>
                    <p class="status-text">
                        <h2>{props.status}</h2>
                    </p>
                </div>
            </div>
        )
    }



export default Contact;