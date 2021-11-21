import React from 'react';
import { Link } from 'react-router-dom';

const Pack = (props) => {
    const{title, image_url, overview, _id}= props.pack
    return (
        <div className="col-md-4 p-2">
            
            <div className="card h-100" style={{"width":"100%"}}>
            <img src={image_url} style={{"height":"250px"}} className="card-img-top" alt="..."/>
            <div className="card-body d-flex flex-column justify-content-around">
                <div style={{"height": "150px"}}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{overview.slice(0,50)}</p>
                </div>
                <div>
                <Link to={`/pack/${_id}`} style={{"textDecoration":"none"}}>
                <button className="btn btn-success">Book now</button>
                </Link>
                </div>
            </div>
            </div>
            
        </div>
        
    );
};

export default Pack;