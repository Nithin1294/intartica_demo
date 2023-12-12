import React, { Component } from 'react';
import Header from './header';
import './aboutnav.css';

 class Aboutnav extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Header/>
                <div className='d-flex'>
                <div className="about-container">

                    <h1 className="about-heading">Crafting Dreams, Building <br/>Homes</h1>
                    <p className="about-para"> Welcome to Intartica, where we turn spaces into living masterpieces, infusing art, functionality, and soulfulness into every corner. Our journey began in 2017, in the vibrant city of Hyderabad, India, founded by the visionary Srinivas Reddy Puram. Intartica is more than an interior design brand; it's a commitment to bring dreams to life.</p>
                    <p className="about-para">Integrity is at the core of everything we do—transparency, fairness, and honesty guide our actions. We take pride in going the extra mile, pushing boundaries, and continuously improving to bring out the best for our customers.</p>
                    <div>
                        <button className='btn btn-danger'>Free Dream Counselling</button>
                    </div>
                </div>
                <div className='d-flex flex-column'>
                    <img src="https://s3-alpha-sig.figma.com/img/a6c0/a0cc/33ccb02319127b49cd5540dcaaccd008?Expires=1703462400&Signature=WfZ0PW3vdf7SpkGv9-JxU~zqAPObZf0RzI8MSPesQTQFrQFamVl5Gkup737X1oGfx3tLbcjrX~wkGQgCu6EcZ7tVQh8AfduRQXX2i-kzSndmim~rk5LgnkzFodK5Fs9rbsK-Rlg2wWZorO6oeSbRFC46VVpVfep3VaIpLqn~Ovo5IYFEdYL4m2V8WO~B6xwKvOmLlfKeNiF8tiN29bgU~RsHf-zVOl60qzncVBmxTjDmgOX7RQgKcHr7nJ3vvq8HSE7Lf~SqPpqU1Rqdqgt5cb-BEvA4d-HRO-tb~qAlldujBRrC8UdHsyWv-bEhp~OwzZErGcYuWfoxF27ztVuVHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="aimg" className='aimg'/>
                    
                    <img src="https://s3-alpha-sig.figma.com/img/3c0a/26b4/a09311ff347ec85361b64ca3b027c308?Expires=1703462400&Signature=S9zqcTdJ3~hTagu7rRyxTmzBx~au7~1huEEUjzXlUpUy9miUje83qYgCAT0lNUPaJA0CESXb~YzFkKUgmJX0tetP8fcKjZWfxphGDoKAaX50TdGS-ruW5iQmaPwgqOZ6DcnzkWgv~v24whqxuySSbdXPiRtU7Oyxt2Mv2PIdAL9JYnEwQG1lWZ4qzpDraSJLDskcyJmQ8ju68NbZv2PCB77ogkTPfEwETIqjsEtB42gp-FcrSRoNXuWn6txInji4LbBuO1gBGriV-IqKN25DVGr~KOwMpMlx8L~-VlDjKq8soaHyU-cxrg3KKrl~xpJ8Ilvnhue8aBWJ1qyQmHo~Mg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="img1" className='img1'/>
                </div>
                </div>

            </div>
        );
    }
 }
  
 export default Aboutnav;