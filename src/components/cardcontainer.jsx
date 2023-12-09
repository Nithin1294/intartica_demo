import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import './cardcontainer.css';






class Cardcontainer extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex pad'>
            <div className='cc'>

                <Icon icon="carbon:building" className='styling mb-5'/>

                <h className='heading'>Canvas for Architects</h>
                <p className='para'>Join forces with us to craft spaces that leave a lasting impression. Benefit from our Project Management Consultancy support, showcase your work in our maintained gallery, and engage in collaborative discussions to ensure a holistic approach.</p>  
            </div>
            <div className='cc'>
            
            <h className='heading'>Haven for House Owners</h>
            <p className='para'>Indulge in a world of personalised design services, efficient kitchen and wardrobe solutions, turnkey services ensuring a stress-free experience, rental house ready designs, access to premium products, house renovations that breathe new life into your space.</p>
            
        </div>
        <div className='cc'>
               
        <h className='heading'>Perfection for Builders</h>
        <p className='para'>For builders seeking excellence in every detail, our services offer tailored solutions such as expertly designed windows, grand entrances with secure interiors, captivating model flats, and flawless finishing works.</p>
        
    </div>
    </div>

        );
    }
}
 
export default Cardcontainer;