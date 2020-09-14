import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';

class Interests extends Component{
    render() {
        return (
            <div className="interests">
                <div className="content_int">
                    <h1><b>I'm currently interested in...</b></h1>
                    <div class="interest_writer">
                    <Typewriter
                            options={{
                                delay: 50,
                                skipAddStyles: true
                            }}
                            onInit={(typewriter) => {
                            typewriter.typeString('Over the past couple of months, I have really been interested in the cloud. ')
                            .pauseFor(250)
                            .typeString('Specifically, I have become very experienced with AWS as I am a certified AWS Solutions Architect, and I am looking to do the same in Azure. ')
                            .pauseFor(250)
                            .typeString('In addition, during my summer internship, I was able to gain a lot experience with cloud-native technologies, such as Kubernetes, Docker, and ElasticSearch, and am working with them for a messaging prototype between Kubernetes nodes. ')
                            .pauseFor(250)
                            .typeString('Currently, I am expanding my knowledge in machine learning and data science; looking at NLP and deep learning right now. ')
                            .start();
                        }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Interests