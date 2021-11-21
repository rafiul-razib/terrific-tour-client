import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';


const Login = () => {
    const{signInWithGoogle, setIsLoading} = useAuth();
    const history = useHistory();
    const location = useLocation()
    const redirect_uri = location.state?.from|| "/"

    const handleSignInWithGoogle = e =>{
        signInWithGoogle()
        .then(result=>{
            history.push(redirect_uri);
        })
        .finally(
            setIsLoading(false)
        )
        e.preventDefault()
    }


    return (
        <div className="container mt-4">
            <h1>Please Login to proceed..</h1>
            {/* <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <div className="d-flex">
            <button type="submit" className="btn btn-primary">Submit</button>
           
            </div>
            </form> */}

            <button onClick={handleSignInWithGoogle} className="btn btn-primary mt-2">Sign in with google</button>
        </div>
    );
};

export default Login;