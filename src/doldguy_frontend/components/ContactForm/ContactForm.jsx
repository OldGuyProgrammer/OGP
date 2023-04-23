//
// Old Guy Programmer Web Page
//
// Contact Form
//
// Jim Olivi 2023
//

import { useState } from "react";
import { doldguy_backend } from "../../../declarations/doldguy_backend";

const defaultContactFields = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
};

const ContactForm = () => {
    const [formFields, setFormFields] = useState(defaultContactFields);
    const { firstName, lastName, email, message } = formFields;

    const handleSubmit = (event) => {
        event.preventDefault();
        const now = new Date().toTimeString();
        doldguy_backend.createMessage(now, firstName, lastName, email, message);
        setFormFields(defaultContactFields);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="contact-form center flex">
            <form onSubmit={handleSubmit}>
                <h3>
                    Contact Us
                </h3>
                <div className="row">
                    <div className="col">
                        <h4>First Name</h4>
                    </div>
                    <div className="col">
                        <input type="text" onChange={handleChange} name="firstName" value={firstName} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4>Last Name</h4>
                    </div>
                    <div className="col">
                        <input type="text" onChange={handleChange} name="lastName" value={lastName} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4>Email Address</h4>
                    </div>
                    <div className="col">
                        <input type="email" onChange={handleChange} name="email" value={email} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4>Enter Message Here</h4>
                    </div>
                    <div className="col">
                        <textarea rows="5" cols="30" onChange={handleChange} name="message" value={message} />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;