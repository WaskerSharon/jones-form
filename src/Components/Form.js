import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z  from "zod";

import "./form.css";

const schema = z.object({
    firstName: z.string().min(2, { message: "First name should be at least 2 characters" }).refine(s => s.match(/^[-a-zA-Z]*$/)),
    lastName: z.string().min(2, { message: "Last name should be at least 2 characters" }).refine(s => s.match(/^[-a-zA-Z]*$/)),
    email: z.string().email({ message: "This is an invalid email address" }),
    phoneNumber:  z.string().length(10, { message: "Phone number should be 10 characters" }).refine(s => s.match(/^[0-9]*$/)),
})

export default function Form() {

        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm({
          resolver: zodResolver(schema),
        });

    const onSubmit = (data) => {
        console.log(data);
    }

    // const onSubmit = handleSubmit((values) => {
    //     console.log(values)
    //   })

    return (
        <div className="form-contain">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
                        />
                        <p className="form-error"> { errors.firstName?.message } </p>
                    </div>

                    <div className="last-name-contain">
                        <label htmlFor="lastName" className="form-label" >Last Name</label>
                        <input 
                            type="text"
                            name="lastName"
                            id="lastName"
                            className="form-input"
                            {...register('lastName')}
                        />
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
                        />
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
                        />
                        <p className="form-error"> { errors.phoneNumber?.message } </p>

                    </div>
                </div>
              
                <button type="submit" className="submit-btn">SEND</button> 
            </form>
        </div>
    )
};