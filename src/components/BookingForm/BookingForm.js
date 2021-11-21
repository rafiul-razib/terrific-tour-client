import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

export default function App(props) {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
      data.order = props.pack;
      data.status = "Pending";
      fetch("https://secure-thicket-54115.herokuapp.com/pack/booking", {
          method: "POST",
          headers: {
              "content-type": "application/json"
          },
          body: JSON.stringify(data)
      })
      .then(res=> res.json())
      .then(data=>{
          if(data.insertedId){
              alert("Booked successfully!!")
              reset();
          }
      })
    console.log(data)
  };

  const {user} = useAuth();

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div>
       
    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
     <div className="form-body form-control">

            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input value={user.displayName} id="fullName" className="form-control col w-100" {...register("name", { required: true })} />

            <label htmlFor="email" className="form-label">Email</label>
            <input value={user.email} id="email" type="email" className="form-control col w-100" {...register("email", { required: true })} />
  
            <label htmlFor="date" className="form-label">Date</label>
            <input id="date" className="form-control col w-100" type="date" {...register("date", { required: true })} />

          <div className="d-flex justify-content-between">
                <div>
                    <label htmlFor="adult" className="form-label">Adult (max:4)</label>
                    <input type="number" id="adult" className="form-control col w-75 me-2" {...register("adult", { min: 1, max: 4 })} />
                </div>
                <div>
                    <label htmlFor="children" className="form-label">Children (max:3)</label>
                    <input type="number" id="children" className="form-control col w-75 ms-2" {...register("children", { min: 0, max: 3 })} />
                </div>
     </div>
     </div>
      
      <input value="Book Now" className="form-control bg-success text-white my-3 ms-auto p-2" type="submit" />
    </form>
    <div className="text-danger p-2">
    <p>On successful booking our agent will contact you about total costing. </p>
    </div>
    </div>
  );
}