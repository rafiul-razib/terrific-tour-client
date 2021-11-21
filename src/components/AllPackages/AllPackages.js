import React, { useEffect, useState } from 'react';
import Pack from '../Pack/Pack';

const AllPackages = () => {
    const[packages, setPackages] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/allPackages")
        .then(res=> res.json())
        .then(data=>{
            setPackages(data)
        })
        .finally(
            
        )
    },[])
    return (
        <div className="container text-center my-4">
            <h2>Trending activities</h2>
            <div className="row g-2 mx-auto">
                {
                    packages.map(pack =><Pack key={pack._id} pack={pack}></Pack>)
                }
            </div>
        </div>
    );
};

export default AllPackages;