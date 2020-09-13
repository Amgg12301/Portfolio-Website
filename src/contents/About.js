import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';

class About extends Component{
    render() {
        return (
            <div className="about">
                <div className="content_about">
                    <h1>Quick Facts About Me...</h1>
                    <div class="card1">
                        <Typewriter
                            onInit={(typewriter) => {
                            typewriter.typeString('I am currently a sophmore at the University of Maryland, College Park studying computer science.')
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString('I am really passionate about web application development, cloud technologies, and cloud-native development.')
                            .pauseFor(1000)
                            .deleteAll()
                            .start();
                        }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default About