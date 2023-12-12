import React, { Component } from 'react';
import './aboutsection.css';
import './servicesection.css';
import Carousel from './carousel';

class Servicesection extends Component {
    state = {  } 
    render() { 
        return (
            <div className='pt-5'>
            <p className='red ml-5'>_____OUR SERVICES</p>
            <div className='d-flex'>
                <div className='about-container m-3'>
                    <h1 className='typography'>Services That Transform,  <span className='spaces'>Spaces</span> That <span className='transcend'>Transcend</span></h1>
                    <p className='about-para'>We approach each project as a masterpiece, working collaboratively like a family to bring your vision to life. Our commitment to experimentation, compelling ideas, and unique techniques ensures an ultimate user experience, making us your one-stop solution for interior design and execution.</p>
                </div>
                
                <Carousel/>
                
            </div>
            </div>
        );
    }
}
 
export default Servicesection;