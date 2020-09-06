import React, { Component } from 'react';
import Social from '../components/Social';

class About extends Component{
    render() {
        return (
            <div className="about">
                <div className="content">
                    <h1>Quick Facts About Me...</h1>
                </div>
                <Social />
            </div>
        )
    }
}

export default About