import React from 'react'
import { useLocation } from 'react-router-dom';

function LocationInfo() {
    const location = useLocation();

  return (
    <div>
        <p>Mevcut URL:</p>
        <p>{JSON.stringify(location, null,2)}</p>
    </div>
  )
}

export default LocationInfo