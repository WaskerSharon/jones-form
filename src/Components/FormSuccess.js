import React from 'react';

export default function SuccessForm() {
    
    return (
        <div>
            <img src={process.env.PUBLIC_URL + '/success.png'} alt="hurrah" /> 
            <h2>Thanks!</h2>
            <h3>Your submition has been received :)</h3>
        </div>
    )
};