import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import ManageMyBookings from '../ManageMyBookings/ManageMyBookings';

const MyOrders = () => {
    const {user} = useAuth();
    const[myOrders, setMyOrders] = useState([]);

    useEffect(()=>{
        fetch(`https://secure-thicket-54115.herokuapp.com/myOrders/${user.email}`)
        .then(res => res.json())
        .then(data =>{
            setMyOrders(data)
        })
    },[])
    return (
        <div className="container">
            <h1>My Orders</h1>
            <div className="table-responsive">
            <table className="table table-striped mt-2">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Package booked</th>
                    <th scope="col">Approval status</th>
                    <th scope="col">Cancel</th>
                    </tr>
                </thead>
                <tbody>
                {
                    myOrders.map(order => <ManageMyBookings
                         key={order._id} 
                         order= {order}
                         myOrders={myOrders}
                         setMyOrders={setMyOrders}
                         ></ManageMyBookings>)
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyOrders;