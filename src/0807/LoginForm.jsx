import React, { useEffect, useState } from 'react'

function LoginForm() {
    const [form, setForm] = useState({ username: "", password: "" });
    const [error, setError] = useState("")
    // let isDisabled = true

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        if (form.username.length > 0 && form.username.length < 3) {
            setError("Kullanıcı adı en az 3 karakterli olmalıdır");
        } else {
            setError("");
            console.log("Form Gönderildi: ", form);
            // alert(`Hoşgeldiniz ${form.username}`);
        }
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Kullanıcı Adı:
                <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange} required />
            </label>
            {error && <p style={{ color: "crimson" }}>{error}</p>}
            <br />
            <label>
                Şifre:
                <input
                    type="password"
                    name='password'
                    value={form.password}
                    onChange={handleChange} />
            </label>
            <br />
            <button type='submit' >Giriş Yap</button>
        </form>
    )
}

export default LoginForm