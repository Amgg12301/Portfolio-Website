import React, { Component } from 'react';
import Social from '../components/Social';
import profile_pic from '../profile_pic.jpg'

class Home extends Component{
    render() {
        return (
            <div className="home">
                <div className="content">
                    <h1>Welcome to the Life of Amogh Giri!</h1>
                    <img src={profile_pic} className="profile_pic"></img>
                </div>
                <Social />
            </div>
        )
    }
}

export default Home