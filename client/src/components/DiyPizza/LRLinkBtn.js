import React from 'react';
import { Link, } from 'react-router-dom';


export default (props) => {
    const { pos, route, onClick } = props;
    if (pos === 'L') {
        if (route !== "") {

            return (
                <>
                    <Link to={'/order/diy/' + route} onClick={() => onClick()}><h3>&#60;</h3></Link>
                </>
            ) 
        }
        else {
            return (
                <>
                </>
            ) 
        }
    }
    else if (pos === 'R'){
        if (route !== "") {
            return (
                <>
                   <Link to={'/order/diy/'+route} onClick={() => onClick()}><h3>&#62;</h3></Link>
                </>
            )
        }
        else {
            return (
                <>
                </>
            )
        }
    }
}