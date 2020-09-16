import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class Skills extends Component{
    render() {
        return (
            <div className="skills">
                <div className="content_skills">
                    <h1><b>Let's take a look at what I've built...</b></h1>
                    <div class="card1">
                        <h3>Have you seen my 3rd-place winning Capital One Hackathon project?</h3>
                        <h3>More information about this project and my other projects on my Github!</h3>
                        <h4>Click me!! :)</h4>
                        <SocialIcon url="https://github.com/Amgg12301" bgColor="black" style={{ height: 70, width: 70, margin: "0px 5px 5px 5px" }}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills