import React from 'react';
import './Style.css';

function Wrapper(props) {
    return (
        <div>
        <div className="jumbotron">
            <h1 className="text-center">Start by clicking images: </h1>
            <h3 className="text-center">Each image clicked earns you a point.  Clicking a duplicate image ends the game!</h3>
        </div>
            <div className="container">
                <div className="row imagesWithin">
                {props.children}
                </div>
            </div>
        </div>
    )
}

export default Wrapper;