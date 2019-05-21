import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { Image } from 'react-bootstrap';
import ItemType from './ItemType'

const pizzaCrust = {
    width: '400px',
}

const target = {
    drop: () => ({ name: 'Crust' }),
}

const Crust = ({ canDrop, isOver, connectDropTarget }) => {
    const isActive = canDrop && isOver
    let opacity = 1;
    if (isActive) {
        opacity = 0.5;
    } else if (canDrop) {
        opacity = 0.1;
    }
    return connectDropTarget(
        <div>
            <Image 
            src={require("../../images/pizza_crust.png")}
            style={Object.assign({}, pizzaCrust, { opacity })}
            rounded 
            />
        </div> 
    )
}

export default DropTarget(
    ItemType.TOPPING,
    target,
    (connect, monitor) => ({
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
)(Crust)