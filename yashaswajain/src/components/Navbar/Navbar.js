import React from 'react'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu'
function Navbar() {
    return (
        <div className="navbar">
        <div className="leftNavbar">
            <span className="whiteleftNavbar">P</span>
            <span className="whiteleftNavbar">o</span>
            <span className="whiteleftNavbar">r</span>
            <span className="whiteleftNavbar">t</span>
            <span className="pinkleftNavbar">f</span>
            <span className="pinkleftNavbar">o</span>
            <span className="pinkleftNavbar">l</span>
            <span className="pinkleftNavbar">i</span>
            <span className="pinkleftNavbar">o</span>
        </div>
        <ul className="listItems">
            <li><a href="#home">.home()</a></li>
            <li><a href="#about">.about()</a></li>
            <li><a href="#work">.work()</a></li>
            <li><a href="#contact">.contact()</a></li>
        </ul>
        <button className="hamburger"><MenuIcon></MenuIcon></button>
        </div>
    )
}

export default Navbar
