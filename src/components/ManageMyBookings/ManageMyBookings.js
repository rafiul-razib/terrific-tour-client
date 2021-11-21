import React from 'react';

const ManageMyBookings = (props) => {
    const{order, status, _id} = props.order;
    const{myOrders, setMyOrders} = props;
    const handleDelete = e =>{
        const proceed = window.confirm("You are going to cancel the booking. Are you sure?")
        if(proceed){
            fetch(`https://secure-thicket-54115.herokuapp.com/myOrders/${_id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                alert("Successfully cancelled booking")
            }
            const remainingBookings = myOrders.filter(order => order._id !== _id)
            setMyOrders(remainingBookings)
        })
        e.preventDefault();
        }
        else{
            return
        }
    }
  
        
        return (
            
                <tr>
                    <th scope="row">#</th>
                    <td>{order.title.slice(0,20)}..</td>
                    <td><button className="btn btn-success me-1">{status}</button></td>
                    <td><button onClick={handleDelete} className="btn btn-danger ms-1">Cancel booking</button></td>
                </tr>
            
        );
};

export default ManageMyBookings;