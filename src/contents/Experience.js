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
                            Over the summer, I developed a message latency collection and analysis application for messages
                            sent between Kubernetes nodes and gathered the data with Elasticsearch for use 
                            in Grafana dashboards. I am currently developing a peer-to-peer messaging prototype
                            over CoAP for Kubernetes node-to-node communication.
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
                            I created a Flask web application using the Yelp Fusion API to be selected for this 3-day summit. 
                            I attended Machine Learning in Azure, iOS/Android Development, Firebase, and Arduino workshops. At 
                            the end, there was a 24-hr hackathon where my team and I won 3rd place for a React and AWS web application
                            that aimed at simplifying credit scores for young adults.
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
                            I am currently a TA for CMSC131: Object Oriented Programming I in Java. I am teaching a 
                            section of around 40 students the object-oriented principles and concepts through Java.
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
                            I am a part of an exclusive three-semester undergraduate research program (FIRE) where I am 
                            working on creating a machine learning model that acts as an accurate classification system 
                            for bacterial genomes and gene clusters using NLP.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">August 2019 - Present</small>
                        </Card.Footer>
                    </Card>
                    </CardDeck>
                </div>
                <footer><Social /></footer>
            </div>
        )
    }
}

export default Experience