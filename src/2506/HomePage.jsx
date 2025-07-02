import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LocationInfo from '../0207/LocationInfo'
import Navigate from '../0207/Navigate'

function HomePage() {
    return (
        <div>
            <NavLink
                to={"/aboutus"}
                className={({ isActive }) => isActive ? "text-blue-600" : "text-gray-600"}
            >
                Hakkımızda
            </NavLink>
            <LocationInfo/>
            <Navigate/>
        </div>
    )
}

export default HomePage