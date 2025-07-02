import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Navigate() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(-1);
    }

  return (
    <div>
        <button onClick={handleNavigate}></button>
    </div>
  )
}

export default Navigate