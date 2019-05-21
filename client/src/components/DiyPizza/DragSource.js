import React from 'react';
import { DragSource } from 'react-dnd';
import ItemType from './ItemType';
import { ListGroup, Image } from 'react-bootstrap';

const dragImgStyle = {
    width: '100px'
}

const topping = ({ name, img, isDragging, connectDragSource }) => {
    const opacity = isDragging ? 0.4 : 1
    return connectDragSource(
        <div>
            <ListGroup.Item style={Object.assign({}, { opacity })}>
                <Image src={img} style={dragImgStyle} rounded />
            </ListGroup.Item>
        </div> 
    )
}

export default DragSource(
    ItemType.TOPPING,
    {
        beginDrag: props => {
            return { name: props.key, img: props.img }
        },
        endDrag(props, monitor) {
        const item = monitor.getItem()
        const dropResult = monitor.getDropResult()
        if (dropResult) {
            alert(`You dropped ${item.name} into ${dropResult.name}!`)
        }
        },
    },
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    }),
)(topping)