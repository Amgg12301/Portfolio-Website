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
                    <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
                    <Card style={{flex: 1}}>
                        <Card.Header>The Aerospace Corporation</Card.Header>
                        <Card.Body>
                        <Card.Title style={{fontWeight:'bold'}}>Software Engineer Intern</Card.Title>
                        <Card.Text>
                            I am a President's Scholar and FIRE researcher at UMD. 
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">June 2020 - Present</small>
                        </Card.Footer>
                    </Card>
                    <Card style={{flex: 1}}>
                        <Card.Header>Capital One</Card.Header>
                        <Card.Body>
                        <Card.Title style={{fontWeight:'bold'}}>Software Engineering Summit</Card.Title>
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
                    <br></br>
                    <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
                    <Card style={{flex: 1}}>
                        <Card.Header>University of Maryland, College Park</Card.Header>
                        <Card.Body>
                        <Card.Title style={{fontWeight:'bold'}}>Major: Computer Science</Card.Title>
                        <Card.Text>
                            I am a President's Scholar and FIRE researcher at UMD. 
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Bachelor's Degree: 2019 - 2022</small>
                        </Card.Footer>
                    </Card>
                    <Card style={{flex: 1}}>
                        <Card.Header>Appian</Card.Header>
                        <Card.Body>
                        <Card.Title style={{fontWeight:'bold'}}>National AP Schol</Card.Title>
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

export default Skills