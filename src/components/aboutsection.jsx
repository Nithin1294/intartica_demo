import React, { Component } from 'react';
import './aboutsection.css';



class Aboutsection extends Component {
    state = {  } 
    render() { 
        return (
            <div className='pt-5'>
                <p className='red ml-5'>_____ABOUT US</p>
                <div className='d-flex p-3'>
                <div className='about-container'>
                    <h1 className='about-heading'>Crafting Dreams, Building Homes. <span className='about-heading1'>Creating Masterpieces,</span> Not Projects</h1>
                    <p className='about-para'>
                       At Intartica, we don't just design interiors; we curate dream spaces that blend art, functionality, and soulfulness. Founded in 2017 by Srinivas Reddy Puram in Hyderabad, India, Intartica has been on a mission to turn houses into homes, celebrating the bond of family and community.
                    </p>
                    <p className='about-para'>
                       We approach each project as a masterpiece, working collaboratively like a family to bring your vision to life. Our commitment to experimentation, compelling ideas, and unique techniques ensures an ultimate user experience, making us your one-stop solution for interior design and execution.
                    </p>
                </div>
                
                <div className='d-flex'>
                    <img src="https://s3-alpha-sig.figma.com/img/3bc5/cc04/6e3997c352a990e64ff8770f8940b41f?Expires=1702857600&Signature=VDukuBNDOdEPJOUWHH77Y6-EuChl6VIT3k0USC1z1SDgGX5lv~j2ooXLmZb9y-b6ANyEI-L8xSzIICTGuuneLTVjAlUj-Ls32Xpd8E4VvfFA9vzNamK0ZAmfkSrI8qbW2MATdxdBPZn82V0EY3~M6tBBymMrxb7YC0Us9bkKJ57WvS9k5t1L-XMt8G7y5P4b4XHvjbmlfYXy6rv~A9UtO0f3ZM6TVr3YDAY5HWwFeA6sYhpafkZL3I--9Q0QgLzle7dPUDXtsfcnyYEcwSqVeAU1yN2SeSbyzhHRgShUqF2QZHOg~O-axeRZ0q0M13XPNEirNHwf9P5KZLBbJDiwiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="img1" className='img1 mb-5 m-5 pb-5'/>
                </div>
                <div className='pb-5'>                    
                    <img src="https://s3-alpha-sig.figma.com/img/aecf/931e/f3a661f4290c17763377ec5fcbfc0581?Expires=1702857600&Signature=OiucEoaE1mp-MTJSZF3ZCe4i2EB8eIrSELR0M~CHMTXdJsM4jRnuV5IdJQ6tivEsPmUr4xqPvRwfc3M5j98tw~HZeZbgw6v6NuKtZ49fQfoUdlqFZatqfymjtMyjVeVyeWSOkmOK~u1I4gfmKSYDq6sk25z3ktZ01OubAnPevzuBXdO5CahCE73WBB-l3ktRfAjFkgoPsRmSdBXGDmBIhV~JmYncbaVQ3Li~jsNiDX5PJLO3TdisjgqLQVR5vQ4DpPIlyFdPEtah-0kyANeOiKcpEvINvHGOvu4Kk3i3LMA2s5OOt5wztmg9B-KFw8eNjrVLW61PZwUpOeDYOFSzFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="img1" className='img1 mt-5'/>
                </div>
                
                </div>

                
            </div>
           
        );
    }
}
 
export default Aboutsection;
