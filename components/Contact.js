import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types'

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status: props.online
        };
    }

        changeStat = () => {
            const newStat = !this.state.online;
            this.setState({online: newStat})
        }
    render() {
        const {avatar, name, online} = this.props;
        return (
            <div className="Contact">
                <img
                    className="avatar"
                    src={avatar}
                    alt="Marc"
                />
                <div>
                    <p className="name">{name}</p>
                    <div className="status">
                        <div
                        onClick={() => this.changeStat()}
                        className={this.state.online ? "status-online" : "status-offline"}></div>
                        <div onClick={() => this.changeStat()} className="status-text">{this.state.online ? "Online" : "Offline"}</div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  
  }

export default Contact;