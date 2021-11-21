import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className= "container-fluid bg-dark mt-5">
            <div className='row mx-auto'>

                <div className="col-md-2"></div>    
                    
                <div className="col-md-2 col-12">
                    <div className="card h-100 text-start border-0 bg-dark text-white">
                    <div className="card-body">
                    <h5 className="card-title">TERRIFIC TOURS</h5>
                        <ul>
                            <li>Istambul</li>
                            <li>Delhi</li>
                            <li>Paris</li>
                            <li>Bangkok</li>
                            <li>Rome</li>
                        </ul>
                    </div>

                    </div>
                </div>

                <div className="col-md-2 col-12">
                    <div className="card h-100 text-start border-0 bg-dark text-white">
                    <div className="card-body">
                    
                        <ul>
                            <li>Dubai</li>
                            <li>Singapore</li>
                            <li>London</li>
                            <li>New York</li>
                        
                        </ul>
                    </div>

                    </div>
                </div>

                <div className="col-md-2 col-12">
                    <div className="card h-100 text-start border-0 bg-dark text-white">
                    <div className="card-body">
                    <h5 className="card-title">LINKS</h5>
                        <ul>
                            <li>Blogs</li>
                            <li>Happy clients</li>
                            <li>Travel diary</li>
                            <li>Travel Guides</li>
                            <li>Payment</li>
                        </ul>
                    </div>

                    </div>
                </div>

                <div className="col-md-4 col-12">
                    <div className="card h-100 text-start border-0 bg-dark text-white">
                    <div className="card-body">
                    <h5 className="card-title">CONTACTS</h5>
                        <ul>
                            <li>Agents</li>
                            <li>Emergency support</li>
                            <li>Campaign</li>
                            <li>New Destinations</li>
                            <li>New Packages</li>
                        </ul>
                    </div>

                    </div>
                </div>
                    
                </div>

                <p className='text-light text-center mb-0 pb-3'>All rights reserved by rafiul-razib @ 2021</p>
        </div>
    );
};

export default Footer;