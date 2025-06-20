import React from 'react'

function Ad(props) {
    return (
        <>
            <input type="text" onChange={(e) => props.setName(e.target.value)} />
            <input type="text" onChange={(e) => props.setAge(e.target.value)} />
        </>
    )
}

export default Ad