import React, { Component } from 'react';
import './crafting.css';
import { Icon } from '@iconify/react';

class Crafting extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex cardd'>
               <div className='d-flex dream-img1'>
                <img src="https://s3-alpha-sig.figma.com/img/79ba/bf30/17497c6191cb773fb741bd9893bb6527?Expires=1703462400&Signature=h3ajaqhv0UKpW84l~0hKJ6dtcktkmVKv825ND3pAcpPiaGcLpF~Zyz4YumJpDvn1JNOQYT8UsDeNabodNTPUHFBFjQfUfOuxBDIder-vW~x00qMdwNasQynpUSG~eulgYSpc4l3kefuHIrv6WewXEwn~MOpECAN~PztVGbrpAwhiDYzPLWOaPKeI2Y3EplSXMK7JFIGn6JfjqiVfDYH5iYpN1xLfV3LJlC8DHS9Yn8~RhES1ZG5YUsxfVipSzdjwzqA7HMREwSsMvQKG0BbOJ7djI4uvZm2iDzGRCOWB21N8g~prQX7j-NfmugctUofTY8ZZlLA3cuENtu37sA7y8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="/" className='dream-img1'/>
            </div>
            <div>
                    <h1 className='dream-heading1 pl-5'> Crafting Your Dream Space:The Intartica   <br/> Experience in Three Simple Steps</h1>
                    <div className='d-flex pl-5'>
                    <p>
                        <Icon icon="material-symbols:lightbulb-circle" className='styling1'/><br/>
                        
                    </p>
                <div>
                    <h4>Dream Consultation </h4>
                    <p>Connect with Us: Begin your Intartica journey by reaching out to us through a call, email, or message. Share your dreams, ideas, and preferences, allowing us to understand your vision for the perfect space.</p>
                    <p>Personalized Discussion: Our friendly team engages in a personalized discussion, getting to know your lifestyle, tastes, and requirements. This step is crucial in tailoring our services to align seamlessly with your unique needs.</p>
                </div>
                </div>
                <div className='d-flex pl-5'>
                    <p>
                    <Icon icon="material-symbols:lightbulb-circle" className='styling1'/><br/>
                       
                    </p>
                <div>
                    <h4>Design Blueprint</h4>
                    <p>Creative Collaboration: Once we have a deep understanding of your vision, our expert designers collaborate with you to craft a personalized design blueprint. This stage involves conceptualizing layouts, color schemes, and aesthetic elements that resonate with your style and preferences.</p>
                    <p>Feedback and Refinement: We present the initial design concepts to you, seeking your feedback and suggestions. Your input is valuable in refining the design until it perfectly aligns with your vision, ensuring that every detail reflects your individuality.</p>
                </div>
                </div>
                <div className='d-flex pl-5'>
                    <p>
                        <Icon icon="icon-park-solid:check-one" className='styling1'/><br/>
                       
                    </p>
                <div>
                    <h4>Seamless Transformation</h4>
                    <p>Execution and Craftsmanship: With the approved design in hand, our skilled craftsmen and dedicated team swing into action. The execution phase involves turning the design into reality, combining precision craftsmanship with modern technology to bring your dream interior to life.</p>
                    <p>Transparent Communication: Throughout the execution process, we maintain transparent communication, providing regular updates on the progress of your project. Any queries or adjustments are addressed promptly, ensuring a seamless and stress-free transformation of your space.</p>
                </div>
                </div>
            </div>
                
            
            
        </div>
            
              
        );
    }
}
 
export default Crafting;