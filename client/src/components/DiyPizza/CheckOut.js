import React from 'react';          

export default (props) => {
    const { toppingP, topping } = props;
    return (
        <>
            <h3 className="center-text">Your total topping is {topping}</h3>
        </>
    )
}

//            <h3 className="center-text">Total price is {topping * toppingP}</h3>
