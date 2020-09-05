import React, { Component } from 'react';
import Social from '../components/Social';

class Home extends Component{
    render() {
        return (
            <div className="home">
                <h1>Welcome to the Life of Amogh Giri!!</h1>
                <Social />
            </div>
        )
    }
}

export default Home