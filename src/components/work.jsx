import React, { Component } from 'react';
import './work.css';
class Work extends Component {
    state = {  } 
    render() { 
        return (
            <diV className='bg-conitainer'>
                <div className='d-flex flex-column'>
                    <h1 className='main-heading'>How we Work</h1>
                    <p className='main-para'>Lorem Ipsum is simply dummy textof the printing and typesetting industry.Lorem Ipsum has been.</p>
                </div>
                <div className='d-flex'>
                <diV className='work-card'>
                     <h4 className='card-num'>01</h4>
                     <h1 className='card-h1'>Statement of the problem</h1>
                     <p className='card-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                     
                </diV>
                <diV className='work-card'>
                     <h4 className='card-num'>02</h4>
                     <h1 className='card-h1'>Project presentation</h1>
                     <p className='card-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been.</p>
                     
                </diV>
                <diV className='work-card'>
                     <h4 className='card-num'>03</h4>
                     <h1 className='card-h1'>Developmentof renderings</h1>
                     <p className='card-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been.</p>
                     
                </diV>
                
               
                </div>
            </diV>
        );
    }
}
 
export default Work;