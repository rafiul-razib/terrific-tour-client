import React from 'react';

const ManageBooking = (props) => {
    const{name, email, order, status, _id} = props.order;
    const{orders, setOrders} = props;
    const handleDelete =()=>{
       const proceed = window.confirm("Are you sure about deleting this booking?")

       if(proceed){
        fetch(`https://secure-thicket-54115.herokuapp.com/manageOrders/${_id}`,{
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                alert("Deleted booking successfully!")
            }
            const remainingOrders = orders.filter(order => order._id !== _id);
            setOrders(remainingOrders);

        })
       }
       else{
           return
       }
    }

    // const handleUpdate = () =>{
    //     const status = "Approved"
    //     fetch(`http://localhost:5000/update/${_id}`,{
    //         method: "PUT",
    //         headers: {
    //             "content-type" : "application/json"
    //         },
    //         body: JSON.stringify(status) 
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data)
    //     })
    // }
    return (
        
            <tr>
                <th scope="row">#</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{order.title.slice(0,20)}..</td>
                <td className="text-primary">{status}</td>
                <td><button  className="btn btn-success me-1">Approve</button></td>
                <td><button onClick={handleDelete} className="btn btn-danger ms-1">Delete</button></td>
            </tr>
        
    );
};

export default ManageBooking;