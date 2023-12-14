import React, { Component } from 'react';
import './dream.css';
import { Icon } from '@iconify/react';

class Dream extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex p-5'>
                <div>
                    <h1 className='dream-heading'>Designing Your Dream in <br/>Three Simple Steps</h1>
                    <div className='d-flex'>
                    <p>
                        <Icon icon="material-symbols:lightbulb-circle" className='styling'/>
                        
                    </p>
                <div>
                    <h4>Turning Dreams into Reality: Our Mission</h4>
                    <p className='dream-para'>Intartica is not just an interior design and execution brand; it's a promise to turn your dream house into a real living castle. We believe in creating a positive and charismatic ambience in every home, an escape where you find solace after a hectic work schedule. Each project is approached as a masterpiece, a reflection of our dedication to enabling the positivity needed to achieve your dreams.</p>
                </div>
                </div>
                <div className='d-flex'>
                    <p>
                    <Icon icon="material-symbols:lightbulb-circle" className='styling'/> <br/>
                        
                    </p>
                <div>
                    <h4>Our Beliefs: Elevating Your Dreams</h4>
                    <p className='dream-para'>At Intartica, we believe our customers are positive, visionary, and ambitious individuals united by family, community, and society. We strive to be a one-stop solution for interior design and execution, a trusted partner in turning houses into dream abodes.
</p>
                </div>
                </div>
                <div className='d-flex'>
                    <p>
                        <Icon icon="icon-park-solid:check-one" className='styling'/> <br/>
                        
                    </p>
                <div>
                    <h4>Turning Dreams into Reality: Our Vision</h4>
                    <p className='dream-para'>Intartica is not just an interior design and execution brand; it's a promise to turn your dream house into a real living castle. We believe in creating a positive and charismatic ambience in every home, an escape where you find solace after a hectic work schedule. Each project is approached as a masterpiece, a reflection of our dedication to enabling the positivity needed to achieve your dreams.</p>
                </div>
                </div>
            </div>

            <div className='d-flex dream-img ml-5'>
                <img src="https://s3-alpha-sig.figma.com/img/79ba/bf30/17497c6191cb773fb741bd9893bb6527?Expires=1703462400&Signature=h3ajaqhv0UKpW84l~0hKJ6dtcktkmVKv825ND3pAcpPiaGcLpF~Zyz4YumJpDvn1JNOQYT8UsDeNabodNTPUHFBFjQfUfOuxBDIder-vW~x00qMdwNasQynpUSG~eulgYSpc4l3kefuHIrv6WewXEwn~MOpECAN~PztVGbrpAwhiDYzPLWOaPKeI2Y3EplSXMK7JFIGn6JfjqiVfDYH5iYpN1xLfV3LJlC8DHS9Yn8~RhES1ZG5YUsxfVipSzdjwzqA7HMREwSsMvQKG0BbOJ7djI4uvZm2iDzGRCOWB21N8g~prQX7j-NfmugctUofTY8ZZlLA3cuENtu37sA7y8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="/" className='dream-img'/>
            </div>
        </div>
            
              
        );
    }
}
 
export default Dream;