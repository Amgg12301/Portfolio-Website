import React, { Component } from 'react';
import Social from '../components/Social';

class Education extends Component{
    render() {
        return (
            <div className="education">
                <div className="content">
                    <h1>Where have I studied at?
                    </h1>
                </div>
                <Social />
            </div>
        )
    }
}

export default Education