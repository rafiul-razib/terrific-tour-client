import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
      fetch("https://secure-thicket-54115.herokuapp.com/packages", {
          method: "POST",
          headers: {
              "content-type": "application/json"
          },
          body: JSON.stringify(data)
      })
      .then(res=> res.json())
      .then(data=>{
          
          if(data.insertedId){
              alert("Package added successfully!!")
              reset();
          }
      })
    console.log(data)
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="container">
       
    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column bg-white p-5 mt-4">
     <div className="form-body form-control">
     <div className="row cols-2 m-2">
          <div className="col">
              {/* include validation with required or other standard HTML validation rules */}
              <label htmlFor="eventName" className="form-label">Package Name</label>
            <input id="eventName" className="form-control col w-100" {...register("title", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
          </div>

          <div className="col">
              {/* include validation with required or other standard HTML validation rules */}
              <label htmlFor="imageUrl" className="form-label">Image url</label>
            <input id="imageUrl" className="form-control col w-100" {...register("image_url", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          

           
     </div>

     <div className="row cols-2 m-2">
        
          <div className="col">
              {/* include validation with required or other standard HTML validation rules */}
              <label htmlFor="eventDescription" className="form-label">Overview</label>
            <textarea id="eventDescription" className="form-control col w-100" {...register("overview", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
          </div>

          <div className="col">
               {/* include validation with required or other standard HTML validation rules */}
               <label htmlFor="date" className="form-label">Activity</label>
            <textarea id="date" className="form-control col w-100" type="text" {...register("activity", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
         
     </div>
     </div>
      
      <input className="form-control bg-success text-white w-25 my-3 ms-auto" type="submit" />
    </form>
    </div>
  );
}