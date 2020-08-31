import React, { Component } from 'react';
import NavItem from './NavItem';

class NavBar extends Component{
    render(){
        return (
            <nav>
                <li>
                    <NavItem item = "Home" link = "/"></NavItem>
                    <NavItem item = "About Me" link = "/about"></NavItem>
                    <NavItem item = "Experience" link = "/experience"></NavItem>
                    <NavItem item = "Projects and Skills" link = "/projects"></NavItem>
                    <NavItem item = "Education" link = "/education"></NavItem>
                    <NavItem item = "Contact" link = "/contact"></NavItem>
                </li>
            </nav>
        )
    }
}

export default NavBar
