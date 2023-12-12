import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import './Essencecard.css';

class Essencecard extends Component {
    state = {  } 
    render() { 
        return (
            <div className='pt-5'>
            <h1 className='ml-5'>_____Interior's Essence</h1>
            <div className='d-flex pl-5'>
            <div className="card-container">
                <Icon icon="mdi:run-fast" className='styling'/> 
                <h1 className='card-heading'>Fast</h1>
                <p className='card-para'>Intartica embodies speed in every project. Our streamlined processes ensure swift transformations, bringing your vision to life without unnecessary delays, making your dream interior a reality in record time.</p>

            </div>
             <div className="card-container">
             <Icon icon="teenyicons:bulb-on-solid" className='styling'/>
             <h1 className='card-heading'>Creative</h1>
             <p className='card-para'>Creativity is our heartbeat. At Intartica, we infuse every design with artistic flair and innovative thinking, crafting spaces that captivate the imagination and breathe life into your unique vision.</p>

            </div>
            <div className="card-container">
            <Icon icon="material-symbols:computer-outline" className='styling'/>
            <h1 className='card-heading'>Modern</h1>
            <p className='card-para'>Modernity defines our designs. Intartica embraces contemporary aesthetics, staying at the forefront of design trends. Your space will be a testament to modern elegance, seamlessly blending style and functionality.</p>

            </div>
            </div>
            <div className='d-flex pl-5 pad'>
            <div className="card-container">
            <Icon icon="material-symbols:group" className='styling'/>
             <h1 className='card-heading'>Budget-friendly</h1>
             <p className='card-para'>Luxury doesn't have to come at a high cost. Intartica is committed to delivering premium designs without breaking the bank. Our budget-friendly approach ensures quality and excellence within your financial framework.</p>

            </div >
            <div className="card-container">
            <Icon icon="material-symbols:group" className='styling'/>
            <h1 className='card-heading'>Client-Centric</h1>
            <p className='card-para'>At Intartica, our focus is on you. We prioritize your needs, preferences, and satisfaction throughout the design journey. Our client-centric approach ensures that every decision, from concept to execution, revolves around realizing your vision and exceeding your expectations.</p>

            </div>

            </div>
            
            </div>
        );
    }
}
 
export default Essencecard;