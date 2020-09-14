import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';

class About extends Component{
    render() {
        return (
            <div className="about">
                <div className="content_about">
                    <h1><b>Quick Facts About Me...</b></h1>
                    <div class="about_writer">
                        <Typewriter
                            options={{
                                delay: 50,
                                skipAddStyles: true
                            }}
                            onInit={(typewriter) => {
                            typewriter.typeString('I am currently a sophmore at the University of Maryland, College Park studying computer science. ')
                            .pauseFor(250)
                            .typeString('I am really passionate about web application development, cloud technologies, and cloud-native development. ')
                            .pauseFor(250)
                            .typeString('Outside of computer science, I love playing basketball, going biking, and trying new food places (hot chicken is one of my favorites!) :) ')
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