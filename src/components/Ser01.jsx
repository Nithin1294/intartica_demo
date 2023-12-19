import React, { Component } from 'react';
import ServiceProfile from './ServiceProfile';


const serviceList =[
    {
        
        imageUrl: "",
        number:1,
        heading:"Builders",
        para:"At the ultimate smart home, you're met with technology before you even step through the front door."
    },
    {
        
        imageUrl: "",
        number:2,
        heading:"Individual House Owners",
        para:"Create A Calming Summer Escape With Our Luxurious Home Accessories For The Balmy Evenings."
    },
    {
        
        imageUrl: "",
        number:3,
        heading:"Kitchen Cabinet",
        para:"Introducing the modular kitchen cabinet system. Start with our huge selection of base and wall cabinets."
    },
    {
        
        imageUrl: "",
        number:4,
        heading:"Interior Design",
        para:"Innovative products often feature innovative designs that play with the patterns we are familiar."
    },
    {
        
        imageUrl: "",
        number:5,
        heading:"Exterior Design",
        para:"These stylish and resilient products provide up-to-date options for roofing, siding, decking, and outdoor spaces."
    },
    {
        
        imageUrl: "",
        number:6,
        heading:"Custom Furniture",
        para:"With Quality Materials and Modern Designs, we have Designs for all Tastes. we bring you World Class Designs."
    },
]
class Ser01 extends Component {
    state = {  } 
    render() { 
        return (
            <ul className="list-container">
            {serviceList.map(eachUser => (
              <ServiceProfile
                userDetails={eachUser}
                key={eachUser.number}
               
              />
            ))}
          </ul>
  
        );
    }
}
 
export default Ser01;