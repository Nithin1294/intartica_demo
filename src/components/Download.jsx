import React, { Component } from 'react';
import "./download.css";
import { Icon } from '@iconify/react';
class  Download extends Component {
    state = {  } 
    render() { 
        return (
            <div className='step-four '>
                <h1>Your estimate is almost ready</h1>
                <div className='iconn d-flex'>
                <Icon icon="material-symbols:download" className='step-icon '/>
                </div>
                <button>Download the pdf</button>



            </div>
            
        );
    }
}
 
export default Download;