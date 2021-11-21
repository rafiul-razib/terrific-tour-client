import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Header = () => {
    const{user, logOut} = useAuth()

    console.log(user.email)

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><h1>Terrific Tours</h1></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    {/* <Link className="nav-link" to="/adminLogin">Admin Login</Link> */}
                 
                   {
                        user?.email &&
                        <Link className="nav-link" to="/myBookings">My Bookings</Link>
                        
                    }

                    {
                        user?.email &&
                        <Link className="nav-link" to="/addPackage">Add Package</Link>
                       
                    }
                    {
                        user?.email &&
                        <Link className="nav-link" to="/manageOrders">Admin</Link>
                       
                    }
                  
                    {
                        user?.email? 
                        <button onClick={logOut} className="btn btn-info">Log Out</button>
                        :
                        <Link className="nav-link" to="/login">User Login</Link>
                    }

                
                </ul>
                <span className="navbar-text">
                    {
                       user?.email && <span>Signed in as {user.displayName}</span> 
                    }
                </span>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Header;