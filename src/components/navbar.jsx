import React, { Component } from 'react';
import './navbar.css';
class Navbar extends Component {
    state = {Clicked:false}
    handleClick = () =>{
        this.setState({Clicked:!this.state.Clicked})
    }

    render() { 
        return (
            <nav>
                <a href="index.html">Logo</a>
                <div>
                    <ul id="navbar" className={this.state.Clicked ?"#navbar active":"#navbar"}>
                        <li><a href="index.html" className='active'>About</a></li>
                        <li><a href="index.html">Gallery</a></li>
                        <li><a href="index.html">Services</a></li>
                        <li><a href="index.html">Our Work</a></li>
                    </ul>
                </div>
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.Clicked?"fas fa-times":"fas fa-bars"}></i>

                </div>
            </nav>
        );
    }
}
 
export default Navbar;