import React, { Component } from 'react';
import Social from '../components/Social';

class Home extends Component{
    render() {
        return (
            <div className="home">
                <div className="content">
                    <h1>Welcome to the Life of Amogh Giri!</h1>
                </div>
                <Social />
            </div>
        )
    }
}

export default Home