import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function HomePage() {
    return (
        <div>
            <NavLink
                to={"/aboutus"}
                className={({ isActive }) => isActive ? "text-blue-600" : "text-gray-600"}
            >
                Hakkımızda
            </NavLink>
        </div>
    )
}

export default HomePage