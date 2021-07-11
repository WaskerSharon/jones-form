
import React from 'react';
import "./form.css";
import useForm from "../../useForm";
import validate from "../../validateInfo";

const FormContent = () => {

    const { handleChange, values, handleSubmit, errors} = useForm(validate);

    return (
        <div className="form-contain">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="form-title">Jones Form</h1>

                <div className="first-name-contain">
                    <label htmlFor="firstName" className="form-label" >First Name</label>
                    <input 
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="form-input"
                        // placeholder="First Name"
                        value={values.firstName}
                        onChange={handleChange}
                     />
                     { errors.firstName && <p>{ errors.firstName }</p> }
                </div>

                <div className="last-name-contain">
                    <label htmlFor="lastName" className="form-label" >Last Name</label>
                    <input 
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="form-input"
                        // placeholder="Last Name"
                        value={values.lastName}
                        onChange={handleChange}
                    />
                     { errors.lastName && <p>{ errors.lastName }</p> }
                </div>

                <div className="e-mail-contain">
                    <label htmlFor="mailAdress" className="form-label" >Mail Adress</label>
                    <input
                        type="email"
                        name="mailAdress"
                        id="mailAdress"
                        className="form-input"
                        // placeholder="Mail Adress"
                        value={values.mailAdress}
                        onChange={handleChange}
                    />
                     { errors.email && <p>{ errors.email }</p> }
                </div>

                <div className="phone-number-contain">
                    <label htmlFor="phoneNumber" className="form-label" >Phone Number</label>
                    <input
                        type="number"
                        name="phoneNumber"
                        id="phoneNumber"
                        className="form-input"
                        // placeholder="Phone Number"
                        value={values.phoneNumber}
                        onChange={handleChange}
                    />
                     { errors.phoneNumber && <p>{ errors.phoneNumber }</p> }


                </div>
              
                <button
                    type="submit"
                    className="submit-btn"
                >
                   SEND
                </button>
                {/* <span></span> */}
            </form>
        </div>
    )
};
export default FormContent;