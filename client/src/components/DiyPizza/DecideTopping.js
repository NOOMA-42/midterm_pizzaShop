import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const devstyle = {
    'padding-top': '15px',
};

export default (props) => {
    const { topping, onClick } = props;
    return (
        <>
            <Container>
                <Col className="center-text" >
                    <Button onClick={onClick.toppingPlus} variant="outline-danger"><h3 style={{ 'paddingTop': '20px'}}>+</h3></Button>
                        <div className="center-text" style={devstyle}>
                            <h3><b>{topping}</b></h3>
                        </div>
                    <Button onClick={onClick.toppingMinus} variant="outline-danger" ><h3 style={{ 'paddingTop': '15px'}}>-</h3></Button>
                    <Row style={{ 'padding-top': '20px'}}>
                        <Col>
                        <h3>How many topping you'd like?</h3>
                        </Col>
                    </Row>
                </Col>
                
            </Container>
        </>
    )  
}