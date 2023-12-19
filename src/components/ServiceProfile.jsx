import React from 'react';
import './serviceprofile.css'
const ServiceProfile = props => {
    const {userDetails} = props
    const {imageUrl, number, heading, para, uniqueNo} = userDetails

return(
    <div>
        <img src={imageUrl}  alt="" />
        <div>
        <h1 className="serivce-number"> {number} </h1>
        <h2 className="serivce-heading"> {heading} </h2>
        <p className="serivce-para"> {para} </p>
       </div>

    </div>
)
}
export default ServiceProfile