import React, { Component } from 'react';
import './recentwork.css';

class Recentwork extends Component {
    state = {  } 
    render() { 
        return (
            <div className='pl-5'>
                <p className='recent pl-5 d-flex'>_____RECENT WORKS</p>
                <div className='d-flex p-3'>
                <div className='recent-container'>
                    <h1 className='black-heading pl-5'>We will let our <span className='red-heading'> Masterpieces, </span> speak and cuddle your <span className='red-heading'>imaginations</span> for us!</h1>
                </div>
                <div className='pl-5'>
                    <img src='https://s3-alpha-sig.figma.com/img/ca30/1603/593b8ba6aaacbe250e55cbaace8b20db?Expires=1702857600&Signature=ZXRk48lmw1dKKKFC8lgplQP1llDuZHUz80imcwi913ZG01bQ4zJKMfQfaOxVjBZuxhXiIWpEccz-sCFzsXZzgFzJN9p2CjYOhCE5~Y7pEswl0zcOaHhoiIxLLhDy5sfMJT5bPz7gKGgNTCXyY75S6S9I2Ujx-UdcwnP6lyWt2nKGLwb0~kgZaalZwcecMsc7TVZspo1-6OkVWlVKRax~Ih~XJCI3W8t4Ku6w4JmTN4NS7ueRDxhfr5kaDeESPsfjZS278-6W-I0oNX08IZhnsYMJAolBVFFvhz4w9JIgH3PFkRjtE9VZTxTHwM9tqJTM8TC8YZAbsgprkjWa0rH51A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='img' className='img'></img>
                    <h1 className='typo'>Luxury Hotel Renovation</h1>
                    <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Faucibus fringilla dui amet faucibus nam.</p>
                </div>
                </div>
                
            </div>
            );
    }
}
 
export default Recentwork;