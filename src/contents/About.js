import React, { Component } from 'react';
import Social from '../components/Social';
import { Card, CardDeck } from 'react-bootstrap';

class About extends Component{
    render() {
        return (
            <div className="about">
                <div className="content">
                    <h1>Quick Facts About Me...</h1>
                    <div class="card1">
                    <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
                    <Card style={{flex: 1}}>
                        <Card.Header></Card.Header>
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{flex: 1}}>
                        <Card.Header>Card header</Card.Header>
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{flex: 1}}>
                        <Card.Header>Card header</Card.Header>
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
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

export default About