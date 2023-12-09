import React from 'react';
import './foot.css';

const Foot=()=>{
 
    return (
        <div className='footer textcolor'>
        <div className='sb_footer section_padding'>
            <div className='sb_footer-links'>
                <div>
                    <p>VivaDecor your premier<br/>destination for your luxury and<br/>modern interior design</p>
                </div>
                <div className="sb_footer-links-div sb_footer">
                    <h4>Our Services</h4>
                    <a href ='/interiordesign'>Interior design</a>
                    <a href ='/outdoordesign'>Outdoor design</a>
                    <a href ='/lightningdesign'>Lightning design</a>
                    <a href ='/Officedesign'>Office design</a>
                </div>
                <div className='sb_footer-links_div sb_footer'>
                <h4>Our Services</h4>
                    <a href ='/reviews'>Reviews</a>
                    <a href ='/carriers'>Carriers</a>
                    <a href ='/pricing'>Pricing</a>
                    <a href ='/pressinquires'>pressinquires</a>                        
                </div>
                <div className='sb_footer-links_div sb_footer'>
                <h4>Our Services</h4>
                    <p>info@vivadecor.com</p>
                    <p>Design Avenue Cityville,<br/>CA 90210 United States</p>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>

    )
}
export default Foot;