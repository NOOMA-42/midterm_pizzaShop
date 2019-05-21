import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Topping from './DragSource';

const toppingData = [
    { img: require("../../images/mushroom.png"), id: "mushroom" },
    { img: require("../../images/pepperoni.png"), id: "pepperoni" },
    { img: require("../../images/green_pepper.png"), id: "green_pepper" },    
    { img: require("../../images/black_olive.png"), id: "black_olive" },    
    { img: require("../../images/onion.png"), id: "onion" }
]    


export default () => {
    return(
        <ListGroup style={{display: 'inline-block'}}>
            {toppingData.map((toppingData) => (
                <Topping key={toppingData.id} img={toppingData.img} />
            ))}
        </ListGroup>
    )
    
}