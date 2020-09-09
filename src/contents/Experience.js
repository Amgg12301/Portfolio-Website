import React, { Component } from 'react';
import Social from '../components/Social';
import { Card, CardDeck } from 'react-bootstrap';

class Experience extends Component{
    render() {
        return (
            <div className="experience">
                <div className="content_exp">
                    <h1>Where have I worked at?</h1>
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
                        <small className="text-muted">August 2020</small>
                        </Card.Footer>
                    </Card>
                    </CardDeck>
                    <br></br>
                    <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
                    <Card style={{flex: 1}}>
                        <Card.Header>University of Maryland, College Park</Card.Header>
                        <Card.Body>
                        <Card.Title style={{fontWeight:'bold'}}>Undergraduate Teaching Assistant</Card.Title>
                        <Card.Text>
                            I am a President's Scholar and FIRE researcher at UMD. 
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">August 2020 - Present</small>
                        </Card.Footer>
                    </Card>
                    <Card style={{flex: 1}}>
                        <Card.Header>University of Maryland, College Park</Card.Header>
                        <Card.Body>
                        <Card.Title style={{fontWeight:'bold'}}>Undergraduate Researcher</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">August 2019 - Present</small>
                        </Card.Footer>
                    </Card>
                    </CardDeck>
                </div>
                <Social />
            </div>
        )
    }
}

export default Experience