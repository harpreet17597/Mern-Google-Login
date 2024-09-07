import React from "react";
import { useNavigate } from "react-router-dom";
const PageNotFound = () =>  {

    const navigate = useNavigate();

    return (
        <>
        <h2>Page Not Found!</h2>
        <button type="button" onClick={() => {navigate('/login')}}>Login Page</button>
        </>
    )
}

export default PageNotFound;