//
// Old Guy Programmer Web Page
//
// Contact Form
//
// Jim Olivi 2023
//

import { useState } from "react";
import { OldGuyCannister } from "../../doldguy_backend";

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

        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(message);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div>
            <h3>
                Contact Us
            </h3>
            <form onSubmit={handleSubmit}>
                <label>"First Name"</label>
                <input type="text" onChange={handleChange} name="firstName" value={firstName} />
                <label>"Last Name"</label>
                <input type="text" onChange={handleChange} name="lastName" value={lastName} />
                <label>"Email Address"</label>
                <input type="email" onChange={handleChange} name="email" value={email} />
                <label>"Enter Message Here"</label>
                <input type="text" onChange={handleChange} name="message" value={message} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;