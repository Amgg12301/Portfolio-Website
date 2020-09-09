import React, { Component } from 'react';
import NavItem from './NavItem';

class NavBar extends Component{
    render(){
        return (
            <nav>
                <ul>
                    <NavItem item = "Home" link = "/"></NavItem>
                    <NavItem item = "About Me" link = "/about"></NavItem>
                    <NavItem item = "Experience" link = "/experience"></NavItem>
                    <NavItem item = "Projects" link = "/projects"></NavItem>
                    <NavItem item = "Education" link = "/education"></NavItem>
                    <NavItem item = "Interests" link = "/interests"></NavItem>
                </ul>
            </nav>
        )
    }
}

export default NavBar
