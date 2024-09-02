import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="container body-dark">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-body-dark">© 2024 Tasks Bucket</p>
                    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" previewlistener="true">
                        <svg className="bi me-2" width="40" height="32"></svg>
                    </a>
                </footer>
            </div>
        </div>
    )
}

export default Footer
