import React, { Component } from 'react';
import './buildcard.css';
class BuildCard extends Component {
    state = {  } 
    render() { 
        return (
            <div className='build-container'>
                <h1 className='builder h1'>Design Your Space For Living</h1>
                <div className='d-flex'>
                    <div className='builder-card'>
                        <h1>Windows</h1>
                        <p> Intartica embodies speed in every project. Our streamlined processes ensure swift transformations, bringing your vision to life without unnecessary delays, making your dream interior a reality in record time.</p>
                    </div>
                    <div className='builder-card'>
                        <h1>Doors</h1>
                        <p>Intartica embodies speed in every project. Our streamlined processes ensure swift transformations, bringing your vision to life without unnecessary delays, making your dream interior a reality in record time.</p>
                    </div>
                    
                </div>
                <div className='d-flex'>
                    <div className='builder-card'>
                        <h1>Model Flats</h1>
                        <p>Intartica embodies speed in every project. Our streamlined processes ensure swift transformations, bringing your vision to life without unnecessary delays, making your dream interior a reality in record time.</p>
                    </div>
                    <div className='builder-card'>
                        <h1>Interiors or Finishing Works</h1>
                        <p>Intartica embodies speed in every project. Our streamlined processes ensure swift transformations, bringing your vision to life without unnecessary delays, making your dream interior a reality in record time.</p>
                    </div>
                    
                </div>
                
                
            </div>
        );
    }
}
 
export default BuildCard;