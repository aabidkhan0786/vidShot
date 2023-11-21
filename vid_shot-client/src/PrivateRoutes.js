import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {

    const loggedIn = JSON.parse(localStorage.getItem("LoggedUser")
    )
    if (loggedIn) {
        return <Outlet />
    } else {
        return <Navigate to="/signin" />
    }
}

export default PrivateRoutes
