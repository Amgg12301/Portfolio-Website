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
                    <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
                    <Card style={{flex: 1}}>
                        <Card.Header>University of Maryland, College Park</Card.Header>
                        <Card.Body>
                        <Card.Title>Major: Computer Science</Card.Title>
                        <Card.Text>
                            I am a President's Scholar and FIRE researcher at UMD. 
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Bachelor's Degree: 2019 - 2022</small>
                        </Card.Footer>
                    </Card>
                    <Card style={{flex: 1}}>
                        <Card.Header>Chantilly High School</Card.Header>
                        <Card.Body>
                        <Card.Title>National AP Schol</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">High School Degree: 2015 - 2019</small>
                        </Card.Footer>
                    </Card>
                    </CardDeck>
                    </div>
                </div>
                <Social />
            </div>
        )
    }
}

export default Education