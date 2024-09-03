import { useState } from "react";
import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {

    const [mode, setMode] = useState("dark");
    const [theme, setTheme] = useState("Light");

    const handleChange = () => {
        if (mode == "light") {
            document.documentElement.setAttribute("data-bs-theme", mode);
            setMode("dark")
            setTheme("Light")
            console.log(mode);
        } else {
            document.documentElement.setAttribute("data-bs-theme", mode);
            setMode("light")
            setTheme("Dark")
            
            console.log(mode);
        }
    }

    return (
        <div>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" previewlistener="true">
                        <svg className="bi me-2" width="40" height="32"></svg>
                        <span className="fs-4">Tasks Bucket</span>
                    </Link>

                    <ul className="nav nav-pills">
                        <li className="nav-item"><Link to="/" className="nav-link text-danger">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link text-danger">About</Link></li>
                    </ul>

                    <div className="form-check form-switch mt-2">
                        <input className="form-check-input body-success" type="checkbox" onClick={handleChange} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{theme}</label>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Navbar
