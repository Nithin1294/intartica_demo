import React, { Component } from 'react';
import './build.css';
class Build extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex pl-5'>
                <div className='w-50'>
                    <img src="https://s3-alpha-sig.figma.com/img/f18f/79a4/01253e393833d3da01e30d1ee5ea8775?Expires=1704672000&Signature=WBtJZFsI6sg6f1hYfDmozcihzrx0W3OA9P~WjQzx8tluC8-vQRPa86Y062SKzVqab~gk204EcbcqkHMuDoodnyqjnDGlik2nSOB-OjZcY8Ilaeo5y5GL3K7LafmhiGzD5bLb4kS5EOY8cYoiuiNCj-D8AAzpTOShsU4rU9cWP6PphheBGYJZtiRjFL4fRTl8yd2ILK5tyGY~wTf08robAo6Mh9qqzEF6Xsmbc0fGDxruGf-sVSOTNDwyVpXGOvVXheGjI~4p0MDkdSXTrLS6TUIrhAiwNlwI3sEEM4Bg9p1bxUXaZYGwG3VjxwlRnsyrqUWiTjoUcYgtsRBMMJvhGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  alt="build-img" className='build-img'/>
                </div>
                <div  className=' right-container d-flex flex-column w-50' >
                    <h1 className='right-container h1'>Transforming Structures into Spectacles</h1>
                    <p className='right-container p'>Elevate your constructions with our expertly designed windows and secure interiors with grand entrances tailored to your vision. Showcase developments with captivating model flats and add meticulous finishing touches that redefine perfection to your interiors or finishing works.</p>
                    <button className='build-button'>Contact Us </button>
                </div>
            </div>
        );
    }
}
 
export default Build;