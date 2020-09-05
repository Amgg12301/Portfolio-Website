import React, { Component } from 'react';
import Social from '../components/Social';

class Contact extends Component{
    render() {
        return (
            <div className="contact">
                <h1>Contact Me!</h1>
                <Social />
            </div>
        )
    }
}

export default Contact