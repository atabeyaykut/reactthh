import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UserDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 5000)

        return () => clearTimeout(timer);
    }, [navigate])

    return (
        <div>
            <h1>Kullanıcı Detayı</h1>
            <p>Kullanıcı ID: {id}</p>
            <p>5 saniye sonra ana sayfaya yönlendirileceksiniz</p>
        </div>
    )
}

export default UserDetail