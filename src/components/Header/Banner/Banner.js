import React from 'react';
import img1 from '../../../images/oxana-melis-2b-P_jWjh7I-unsplash.jpg'
import img2 from '../../../images/andreas-brucker-g5Uh7nP60FA-unsplash.jpg'
import img3 from '../../../images/ross-parmly-rf6ywHVkrlY-unsplash.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-caption">
                <h1 className="display-1 fw-bold">The world awaits</h1>
                <h3>Book incredible things to do around the world</h3>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    );
};

export default Banner;