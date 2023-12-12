import React, { Component } from 'react';
import './interiortop.css';
class Interiortop extends Component {
    state = {  } 
    render() { 
        return (
        
        <div className='d-flex cv'>
            <img src="https://s3-alpha-sig.figma.com/img/a6c0/a0cc/33ccb02319127b49cd5540dcaaccd008?Expires=1703462400&Signature=WfZ0PW3vdf7SpkGv9-JxU~zqAPObZf0RzI8MSPesQTQFrQFamVl5Gkup737X1oGfx3tLbcjrX~wkGQgCu6EcZ7tVQh8AfduRQXX2i-kzSndmim~rk5LgnkzFodK5Fs9rbsK-Rlg2wWZorO6oeSbRFC46VVpVfep3VaIpLqn~Ovo5IYFEdYL4m2V8WO~B6xwKvOmLlfKeNiF8tiN29bgU~RsHf-zVOl60qzncVBmxTjDmgOX7RQgKcHr7nJ3vvq8HSE7Lf~SqPpqU1Rqdqgt5cb-BEvA4d-HRO-tb~qAlldujBRrC8UdHsyWv-bEhp~OwzZErGcYuWfoxF27ztVuVHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="crashed" className='crashed p-5'/>
            <div>
                <h1 className='interior-h'>Our Inspirations</h1>
                <p className='interior-p'>The name "Intartica" itself is a creative evolution, symbolizing a journey from a "collection of art" to "Collection of Interior Art" and culminating in the concept of the "Continent of Interiors." It encapsulates our philosophy of creating a collection of art that goes beyond mere aesthetics, combining form and function to design interiors that are not just beautiful but also have healing capabilities for the soul.</p>
                <div>
                        <button className='btn btn-danger button mt-5'>Learn More</button>
                </div>
            </div>

        </div>
        );
    }
}
 
export default Interiortop;