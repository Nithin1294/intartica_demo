import React, { Component } from 'react';
import './header.css';
import Icon from '../images/Icon.png';

class Header extends Component {
    state = { 
        imageUrl : 'https://s3-alpha-sig.figma.com/img/9a75/0fad/0949c8bbb44419ca3007e85cdcc087e9?Expires=1702252800&Signature=E78WEeNA~h06mYyRPRm910TtPR80Al7iZ~BcJYI0An~wCcrN5f7RrLkjFzbZGbZ3b-fZep3j7DllorW0Jm~RN5bGYf-46fOeapU7j3nMY-BymEZoIaxnjKRa8L25LuYQTZkEClmZndQZLsDmjvRc9jmC9JGYDPbTVwLJte8lqqC4J1KoYXNCgdzCriLhJU2iE~b~3SXxl2o5ZdaIV9FfMeW7-UCNLj9PoZNrfng6JV4h-v6bWf4GCbsXbfVN7rDh8sUAQPUP6S04i1jhquHC7z9ruW7B2ERHWplZvMxeJet4qOmY-8Rfp4FKUl6Ost4dW8CiF5hdNtjSJIdidVQF2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    } 
    render() { 
        return (
            <div className='header'>
                <div><img className='home-logo' src={this.state.imageUrl}></img></div>
                <div className='option'>
                    <div className='nav-btn'><a href=''>About</a></div>
                    <div className='nav-btn'><a href=''>Services</a></div>
                    <div className='nav-btn'><a href=''>Our Work</a></div>
                    <div className='nav-btn'><button className='btn btn-danger'>Contact Us <img src={Icon} className="mb-1"></img></button></div>
                </div>
            </div>
        );
    }
}
 
export default Header;