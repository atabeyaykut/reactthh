import React, { useState } from 'react'

// onChange -> İnput değeri değiştiğinde çalışan event
// onSubmit -> Form gönderildiğinde çalışan event

function NameForm() {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <form >
            <label htmlFor="name">İsim: </label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={handleChange} />
            <p>Girdiğiniz isim: {name}</p>
        </form>
    )
}

export default NameForm