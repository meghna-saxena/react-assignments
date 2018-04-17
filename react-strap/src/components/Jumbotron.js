import React from 'react';

const Jumbotron = (props) => {
    return (
        <div>
            <div className="jumbotron">
                <div className="container">
                    <h1>{props.heading}</h1>
                    <p className="lead">{props.text}</p>
                    <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;