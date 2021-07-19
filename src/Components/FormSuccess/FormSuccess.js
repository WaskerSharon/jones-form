import React from 'react';
import './formSuccess.css';
import { Link } from 'react-router-dom'

export default function SuccessForm() {
    
    return (
        <div className="wraper">
            <img className="success-img" src={process.env.PUBLIC_URL + '/success.png'} alt="hurrah" /> 
            <div className="text-wraper">
                <h2>Thanks!</h2>
                <h3>Your submition has been received { ":)" } </h3>
            </div>

            <button className="btn back-to-btn" >
                <Link to="/jones-form">
                    Back to form
                </Link>
            </button>
        </div>
    )
};
