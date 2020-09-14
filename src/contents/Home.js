import React, { Component } from 'react';
import Social from '../components/Social';
import profile_pic from '../profile_pic.jpg';
import Typewriter from 'typewriter-effect';

class Home extends Component{
    render() {
        return (
            <div className="home">
                <div className="content">
                    <Typewriter
                        options={{
                            delay: 100,
                            skipAddStyles: true
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('Welcome to the Life of Amogh Giri!')
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .start();
                        }}
                    />
                    <img src={profile_pic} alt="profile" className="profile_pic"></img>
                </div>
                <Social />
            </div>
        )
    }
}

export default Home