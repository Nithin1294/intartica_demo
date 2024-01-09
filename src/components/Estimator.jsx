import React, { Component } from 'react';
import "./estimator.css";
class Estimator extends Component {
    state = {  } 
    render() { 
        return (
            <>
           
            <div className='step-one text-center'>
                <h1>Select your BHK type</h1>
                <p>To know more about this, <span className='step-one span'>click here</span></p>
                
                <div className='cc d-flex flex-column'>
                    <div className='cc'>
                    <input type='radio' id='radio1'/>
                    <label for='radio1'>1 BHK</label>
                    </div>
                    <div className='cc'>
                    <input type='radio' id='radio2'/>
                    <label for='radio2'>2 BHK</label>
                    </div>
                    <div className='cc'>
                    <input type='radio' id='radio3'/>
                    <label for='radio3'>3 BHK</label>
                    </div>
                    <div className='cc'>
                    <input type='radio' id='radio4'/>
                    <label for='radio4'>4 BHK</label>
                    </div>
                    <div className='cc'>
                    <input type='radio' id='radio5'/>
                    <label for='radio5'>5 BHK+</label>
                    </div>
                   
                    
                   

                </div>
               
                </div> 
                <div className='d-flex c1'>
                    <button className='btn left-button'>Back</button>
                    <button className='btn right-button'>Next</button>
                </div>
               
                
                
           
            </>
        );
    }
}
 
export default Estimator;