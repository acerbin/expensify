import React from "react";
import {Link} from "react-router-dom"

const PageNotFound = () => {
    return (<p>Page was Not Found! <Link to="/dashboard">Go Home</Link></p>)
}

export default PageNotFound;