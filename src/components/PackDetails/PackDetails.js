import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookingForm from '../BookingForm/BookingForm';

const PackDetails = () => {
    const[pack, setPack] = useState({})
    const {id} = useParams();
    
    useEffect(()=>{
        fetch(`https://secure-thicket-54115.herokuapp.com/pack/${id}`)
        .then(res => res.json())
        .then(data =>{
        setPack(data)
    })
    },[])
    return (
        <div className="row container mt-3 mx-auto">
            <div className="col-md-8">
            <div className="card" style={{"width": "100%"}}>
                <img src={pack.image_url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{pack.title}</h5>
                    <p className="card-text">{pack.overview}</p>
                    <div style={{"borderTop":"1px solid grey", "borderBottom": "1px solid grey"}} className="py-4 px-2">
                        <h6>{pack.activity}</h6>
                    </div>
                </div>
                </div>
            </div>

            <div className="col-md-4">
                <h5>Book this Event</h5>
                <BookingForm pack={pack}></BookingForm>
            </div>
            
        </div>
    );
};

export default PackDetails;