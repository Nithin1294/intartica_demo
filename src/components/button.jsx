import React, { Component } from 'react';
import './button.css';
class Button extends Component {
    state = {  } 
    render() { 
        return (
            <div  className='d-flex pl-5'>
                <div >
                <div >
                    <button className='button-red'>Windows</button>
                </div>
                <div>
                    <button className='button-red'>Doors</button>
                </div>
                <div>
                    <button className='button-red'>Model Flats</button>
                </div>
                <div>
                    <button className='button-red'>Interior or Finishing works</button>
                </div>
                </div>
                <div>
                    <div>
                    <h4 className='heading-m'>For Builders: Building Dreams with Precision</h4>
                    <h1 className='heading-h'>Transforming Structures into Spectacles</h1>
                    </div>
                    <div className='pl-5'>
                    <button className='button-blue'>More Details</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Button;