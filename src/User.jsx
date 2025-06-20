import React from 'react'

function User(props) {

    return (
        <>
            <div>
                <p>İsim: {props.name}</p>
                <p>Yaş: {props.age}</p>
            </div>
        </>
    )
}

export default User