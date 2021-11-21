import React from 'react';
import Iframe from 'react-iframe'

const Video = () => {
    return (
        <div className="container text-center">
            <h2 className="mb-3 p-3">See Our Client's Happy Faces</h2>
            <div className="row bg-light p-4">
                <div className="col-md-8 d-flex justify-content-center">
                <Iframe url="https://www.youtube.com/embed/kroXVig0QRc"
                    width="560px"
                    height="315px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center ps-5" style={{"borderLeft" : "1px solid black"}}>
                    <h3>Explore the videos from different parts of the world on our youtube channel.</h3>
                </div>
                </div>
        </div>
    );
};

export default Video;