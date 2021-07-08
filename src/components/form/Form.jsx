import "./form.css";
import useForm from "../../useForm";

export default function Form() {

    const { handleChange, values } = useForm();
        

    return (
        <div className="form-section">
            <h1 className="form-title">Jones Form</h1>
            <form className="form">
                <input 
                    type="text"
                    name="firstName"
                    className="form-input"
                    placeholder="First Name"
                    value={values.firstName}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    name="lastName"
                    className="form-input"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="mailAdress"
                    className="form-input"
                    placeholder="Mail Adress"
                    value={values.mailAdress}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="phoneNumber"
                    className="form-input"
                    placeholder="Phone Number"
                    value={values.phoneNumber}
                    onChange={handleChange}
                />

                <button type="submit" className="submit-btn" >SEND</button>
                {/* <span></span> */}
            </form>
        </div>
    )
};