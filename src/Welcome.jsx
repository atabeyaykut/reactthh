import React from 'react'

function Welcome({ name = "Ziyaretçi" }) {
    return (
        <>
            <h1>Merhaba, {name}</h1>
        </>
    )
}

export default Welcome