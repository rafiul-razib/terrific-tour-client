import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import CollageImg from '../CollageImg/CollageImg';

const Collage = () => {
    const[destination, setDestination] = useState([]);
    useEffect(()=>{
        fetch("/fakeImg.json")
        .then(res => res.json())
        .then(data =>{
            setDestination(data)
        })
    },[])
    return (
        <div className="text-center container-fluid my-5">
            <h2>Top Destinations</h2>
            <div className="row g-0 mt-4">
            {
                destination.map(destiny =><CollageImg key={destiny.id} destiny={destiny}></CollageImg>)
            }
            </div>
        </div>
    
    );
};

export default Collage;