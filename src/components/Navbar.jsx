import React from 'react'
import { Nav, NavItem, NavLink } from 'react-bootstrap'

const Navbar = () => {
    return (
        <>
            <Nav className="justify-content-center border-bottom" activeKey="/home">
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/">Services</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/">Products</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/about" eventKey="about">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/contact" eventKey="contact">
                        Contact
                    </NavLink>
                </NavItem>
            </Nav>
        </>

    )
}
export default Navbar;