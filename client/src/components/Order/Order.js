import React , { Component } from 'react';
import { Modal, Col, Card, Row, Container, Button, Image } from 'react-bootstrap';

export default class Order extends Component{
    constructor(props, context) {
        super(props, context);
        
        this.state = {
          show: true,
        };
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    render() {
        return(
            <>
                <Modal onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Pizza Fairy</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <Image src={require('../../images/pizzafairy.png')} rounded />
                    Woohoo, you're ordering your custom pizza!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                    Close
                    </Button>
                </Modal.Footer>
                </Modal>
                <Container>
                    <Row>
                        <section></section>
                    </Row>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require('../../images/about-1-600x400.jpg')} />
                            <Card.Body>
                                <Card.Title>Custom Pizza</Card.Title>
                                <Card.Text>
                                Make, Make
                                </Card.Text>
                                <Button variant="primary">Make it</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require('../../images/about-2-600x400.jpg')} />
                            <Card.Body>
                                <Card.Title>Shoping Cart</Card.Title>
                                <Card.Text>
                                Eat, Eat
                                </Card.Text>
                                <Button variant="primary">Let's </Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}