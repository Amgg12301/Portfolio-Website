import React, { Component } from 'react';
import Social from '../components/Social';
import { Card, CardDeck } from 'react-bootstrap';

class Skills extends Component{
    render() {
        return (
            <div className="skills">
                <div className="content_skills">
                    <h1>Let's take a look at what I've built...</h1>
                    <div class="card1">
                    <h2>Work in progress, sorry about that :)</h2>
                    </div>
                </div>
                <Social />
            </div>
        )
    }
}

export default Skills