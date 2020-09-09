import React, { Component } from 'react';
import Social from '../components/Social';
import { CardDeck, Card } from 'react-bootstrap';

class Experience extends Component{
    render() {
        return (
            <div className="experience">
                <div className="content_exp">
                    <h1>Where have I worked at?</h1>
                    <div class="card1">
                    <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
                    <Card style={{flex: 1}}>
                        <Card.Header>The Aerospace Corporation</Card.Header>
                        <Card.Body>
                        <Card.Title>Software Engineer Intern</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Footer>June 2020 - Present</Card.Footer>
                        </Card.Body>
                    </Card>
                    <Card style={{flex: 1}}>
                        <Card.Header>University of Maryland Computer Science Department</Card.Header>
                        <Card.Body>
                        <Card.Title>Undergraduate Teaching Assistant</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        <Card.Footer>August 2020 - Present</Card.Footer>
                        </Card.Body>
                    </Card>
                    <Card style={{flex: 1}}>
                        <Card.Header>Capital One</Card.Header>
                        <Card.Body>
                        <Card.Title>Software Engineering Summit and Hackathon</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        <Card.Footer>August 2020</Card.Footer>
                        </Card.Body>
                    </Card>
                    </CardDeck>
                    </div>
                </div>
                <Social />
            </div>
        )
    }
}

export default Experience