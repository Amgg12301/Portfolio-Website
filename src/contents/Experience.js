import React, { Component } from 'react';
import Social from '../components/Social';

class Experience extends Component{
    render() {
        return (
            <div className="experience">
                <div className="content">
                    <h1>Where have I worked at?</h1>
                </div>
                <Social />
            </div>
        )
    }
}

export default Experience