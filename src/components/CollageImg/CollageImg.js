import React from 'react';

const CollageImg = (props) => {
    return (
        <div className="col-md-3 col-12">
            <div class="card" style={{"width":"100%"}}>
            <img src={props.destiny.img} class="img-fluid" style={{"height": "250px"}} alt="..."/>
            </div>
        </div>
    );
};

export default CollageImg;