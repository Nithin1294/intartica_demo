import React, { Component } from 'react';
import './welcome.css';

class Welcome extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container'>
                <h1 className='heading'>
                    Welcome to Intartica - Where Dreams Reside in Design
                </h1>
                <p className='heading-tagline'>
                    Ready to transform your living space into a dream abode? Let's embark on this journey together. Explore our services or connect with us to discuss your vision.
                </p>
            </div>
        );
    }
}
 
export default Welcome;