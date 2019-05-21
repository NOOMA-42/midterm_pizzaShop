import React from 'react';
import DndTopping from './DndTopping';
import DndCrust from './DragTarget';
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
                 

export default (props) => {
    const { topping } = props;
    return(
        <>
            <DragDropContextProvider backend={HTML5Backend}>
                <h3 className="center-text">Choose {topping} topping!</h3>
                <div style={{ display: "flex" }}>
                    <DndCrust />
                    <DndTopping/>
                </div>
            </DragDropContextProvider> 
        </>
    )
}
