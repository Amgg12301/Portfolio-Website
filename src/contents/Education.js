import React, { Component } from 'react';
import Social from '../components/Social';
import { Card, CardDeck } from 'react-bootstrap';

class Education extends Component{
    render() {
        return (
            <div className="education">
                <div className="content_edu">
                    <h1>Where am I studying at right now?</h1>
                    <div class="card1">
                    <CardDeck>
                    <Card style = {{width: "50%"}}>
                        <Card.Header>University of Maryland, College Park</Card.Header>
                        <Card.Body>
                        <Card.Title>Major: Computer Science</Card.Title>
                        <Card.Text>
                            - FIRE (First Year Innovation and Research Experience)
                            - Indian Student Association
                            - Spikeball
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Bachelor's Degree: 2019 - 2022</small>
                        </Card.Footer>
                    </Card>
                    </CardDeck>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education