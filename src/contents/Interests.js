import React, { Component } from 'react';
import Social from '../components/Social';
import { Card, CardDeck } from 'react-bootstrap';

class Interests extends Component{
    render() {
        return (
            <div className="interests">
                <div className="content_int">
                    <h1>I'm currently interested in...</h1>
                    <div class="card1">
                    <h2>Work in progress, sorry about that :)</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Interests