import React from 'react'

 const Header = () => {
    return (
        <div className="top-brand py-3 mb-4 border-bottom bg-light">
            <div className="container d-flex flex-wrap justify-content-center">
                <a href="/"
                    className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4 text-success fw-bold">NEHA EXPORTS</span>
                </a>
                <form className="d-flex" role="search">
                    <div className="input-group">
                        <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success  " type="submit"><i
                            className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>
                <div className="text-end d-flex align-items-center  link-body-emphasis text-decoration-none">
                    <i className="fa-solid fa-user ms-4 me-1"></i>Login
                    <i className="fa-solid fa-cart-shopping ms-4 me-1"></i>Cart
                </div>
            </div>
        </div>
    )
}
export default Header;