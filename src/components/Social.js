import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class Social extends Component{
    render(){
        return (
            <div className="socials">
                <h3 align="center">Let's Stay Connected!</h3>
                <SocialIcon url="http://linkedin.com/in/agiri01" style={{ height: 40, width: 40, margin: "0px 5px 5px 5px"}}/>
                <SocialIcon url="https://github.com/Amgg12301" bgColor="black" style={{ height: 40, width: 40, margin: "0px 5px 5px 5px"}}/>
                <SocialIcon url="mailto:amoghgiri01@gmail.com" bgColor="#F14C0E" style={{ height: 40, width: 40, margin: "0px 5px 5px 5px"}}/>
                <SocialIcon url="https://www.facebook.com/amgg12301/" style={{ height: 40, width: 40, margin: "0px 5px 5px 5px"}}/>
                <SocialIcon url="https://www.instagram.com/amogh_giri01/" bgColor="#FF33FF" style={{ height: 40, width: 40, margin: "0px 5px 5px 5px"}}/>
            </div>
        )
    }
}

export default Social