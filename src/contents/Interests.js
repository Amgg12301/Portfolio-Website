import React, { Component } from 'react';
import Social from '../components/Social';

class Interests extends Component{
    render() {
        return (
            <div className="interests">
                <div className="content">
                    <h1>I'm currently interested in...</h1>
                </div>
                <Social />
            </div>
        )
    }
}

export default Interests