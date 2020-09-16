import React, { Component } from 'react';
import umd_logo from '../umd_logo.jpg';

class Education extends Component{
    render() {
        return (
            <div className="education">
                <div className="content_edu">
                    <h1><b>Where am I studying at right now?</b></h1>
                    <div class="card1">
                        <img src={umd_logo} alt="profile" className="logo"></img>
                        <h2>University of Maryland, College Park</h2>
                        <h3>Go Terps!!</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education