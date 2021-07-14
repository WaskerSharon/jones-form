import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z  from "zod";

import "./form.css";

const schema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().email({ message: "Invalid email addresssssssssssssss......." }),
    phoneNumber: z.number().nonnegative().int(),
})

export default function Form() {

        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm({
          resolver: zodResolver(schema),
        });

    const onsubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="form-contain">
            <form className="form" onSubmit={handleSubmit(onsubmit)}>
                <h1 className="form-title">Jones Form</h1>

                <div className="form-inputs">
                    <div className="first-name-contain">
                        <label htmlFor="firstName" className="form-label" >First Name</label>
                        <input 
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="form-input"
                            {...register('firstName')}

                            // value={values.firstName}
                            // onChange={handleChange}
                        />
                        <p className="form-error"> { errors.firstName?.message } </p>
                        {/* { errors.firstName && <p className="form-error">{ errors.firstName }</p> } */}
                    </div>

                    <div className="last-name-contain">
                        <label htmlFor="lastName" className="form-label" >Last Name</label>
                        <input 
                            type="text"
                            name="lastName"
                            id="lastName"
                            className="form-input"
                            {...register('lastName')}

                            // value={values.lastName}
                            // onChange={handleChange}
                        />
                        {/* { errors.lastName && <p className="form-error">{ errors.lastName }</p> } */}
                        <p className="form-error"> { errors.lastName?.message } </p>

                    </div>

                    <div className="e-mail-contain">
                        <label htmlFor="email" className="form-label" >Mail Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-input"
                            {...register('email')}


                            // value={values.email}
                            // onChange={handleChange}
                        />
                        {/* { errors.email && <p className="form-error">{ errors.email }</p> } */}
                        <p className="form-error"> { errors.email?.message } </p>

                    </div>

                    <div className="phone-number-contain">
                        <label htmlFor="phoneNumber" className="form-label" >Phone Number</label>
                        <input
                            type="number"
                            name="phoneNumber"
                            id="phoneNumber"
                            className="form-input"
                            {...register('phoneNumber')}


                            // value={values.phoneNumber}
                            // onChange={handleChange}
                        />
                        {/* { errors.phoneNumber && <p className="form-error">{ errors.phoneNumber }</p> } */}
                        <p className="form-error"> { errors.phoneNumber?.message } </p>

                    </div>
                </div>
              
                <button type="submit" className="submit-btn">SEND</button> 
            </form>
        </div>
    )
};