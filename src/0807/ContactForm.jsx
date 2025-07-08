import React, { useState } from 'react'

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form>
            <label>
                İsim:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange} />
            </label>
            <br />
            <label >
                E-mail:
                <input
                    type="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange} />
            </label>
            <p>{formData.name} - {formData.email}</p>
        </form>
    )
}

export default ContactForm