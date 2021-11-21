import React, { useEffect, useState } from 'react';
import ManageBooking from '../ManageBooking/ManageBooking';

const Admin = () => {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch("https://secure-thicket-54115.herokuapp.com/admin/allBookings")
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    },[])
    
    return (
        <div className="container">
            <h1>Manage Bookings</h1>
            <div className="table-responsive">
            <table className="table table-striped mt-2">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Package booked</th>
                    <th scope="col">Approval status</th>
                    <th scope="col">Approve</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                    orders.map(order => <ManageBooking key={order._id} order= {order} setOrders={setOrders} orders={orders}></ManageBooking>)
                }
                </tbody>
            </table>
            </div>

           
        </div>
    );
};

export default Admin;