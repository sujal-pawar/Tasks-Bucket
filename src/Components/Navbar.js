import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" previewlistener="true">
                        <svg className="bi me-2" width="40" height="32"></svg>
                        <span className="fs-4">Tasks Bucket</span>
                    </a>

                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="/" className="nav-link text-danger">Home</a></li>
                        <li className="nav-item"><a href="/" className="nav-link text-danger">Add Task</a></li>
                    </ul>
                </header>
            </div>
        </div>
    )
}

export default Navbar
