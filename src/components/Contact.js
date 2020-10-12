import React from 'react';
import './Style.css';



class Contact extends React.Component {
    render() {
        return (
        <div className="Contact">
            <img  className="avatar" src="https://randomuser.me/api/portraits/women/15.jpg" alt="user-pic"/>
            
        <div className="status">
        <p class="name">Jane</p>
            <box class="status-online" alt="online"></box>
           <p class="status-text">online</p>
        </div>
      </div>
        )
    }

    
}

export default Contact;