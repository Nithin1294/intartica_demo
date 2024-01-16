import React, { Component } from 'react';
import "./package.css";
class Package extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex flex-column m-5'>
                <form>
                
            
            <div className='step-three text-center '>
                <h1>Pick your package</h1>
                <div className='card1'>
                
                    <input type='radio' id='radio1' name="title"/>
                    <label for='radio1'>Essentials (₹₹)</label>
                    <p>A range of essential home interior solutions that's perfect for all your needs.</p>
                    <div>
                    <img src="https://s3-alpha-sig.figma.com/img/7247/50e9/079ce20e8540c45e2aa2a01940522eea?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IiVFkJz9wBvb69DfhhYwZiNjTy1W56lGTiXleVU5Ci8ZU3FL8Fx0CfPg0Ni7mI5DEqvsGzYJTLlZI6xLD8RIIZG4yQgfiXM-Pt8~cpetSnv705d~Wi9rggeoUuahv5ULvINTQDGrk5cEvzNkfvMQQhKxz124gnqQYODF2W7v1PnaIksYSd~mqSajBUKa808IwQw9NIglxmkCjNhZ9eENw~AwTse1Q13MIh~ViBErOfBdynW1N0W2CMfxKoxZ47AW2nZTp3FR9MIVsxsR7xKMIEaV~Hogb~D6KBHx4vkHsOffK9xZ0TyJwZ5Q4LgoiqWrBRbf4D0wO91SLq1a6JDtDw__" alt=""/>
                    </div>
                    <p>Affordable pricing</p>
                    <p>Convenient designs</p>
                    <p>Basic accessories</p>
                    
                </div>
                <div className='card1'>
                
                <input type='radio' id='radio2' name="title"/>
                <label for='radio2'>Premium (₹₹₹)</label>
                <p>Superior home interior solutions that will</p>
                <div>
                <img src="https://s3-alpha-sig.figma.com/img/af02/4733/55c5665039caa2dda025bb9f98b6efaa?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lcLXI2tZSwSspo07FX16Yj7PjiA6JUfBTeQLoUVMWEN70zIy1QZUswM8qdzMzuF73Z8BUmI-IZLhJ5F97uADGFeAN0lXufDFibibbAULkQqzNhCRl5IFx~ZhMyBcJMh4y420U5xXT1DTxs8uc7VfzJOpJdviHuBOjtx3KskhCue3EvZEi8fJ96JsZSG9mLGbKe7oe8~U4GzZKP9M-22JNQScGPIkDW2typ1fECq-WkqltG1w7ZJp0xmB3JTnBnZyyNt1f1DptsA47blsQ-H9w3JFGFaIol~~tOJue8e8~JKI240vcEFCytVJF-qekI10YUdScBo65YYRueFRlNpgew__" alt=""/>
                </div>
                <p>Mid-range pricing</p>
                <p>Premium designs</p>
                <p>Wide range of accessories</p>
                
            </div>
            <div className='card1'>
                
                <input type='radio' id='radio3' name="title"/>
                <label for='radio3'>Luxe (₹₹₹₹)</label>
                <p>High-end interior solutions for the ultimate home interior experience you deserve.</p>
                <div>
                <img src="https://s3-alpha-sig.figma.com/img/f934/fa1e/69f7f61adeb78c5dc3e77ef7328b6450?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qjjA60EiW8jExO3sWKIJq8uF0XlR0kCI4OwRrvqceVq4r54CD57V1sBs7F8WhJtzO-MIcet8PNXJbaTJsYuNlWSjZYzPchVvtJyNIEa1l7iJaRkaA0kCd9mixy0CxhShVes2egd6j-sbvljYp~7TAV9FQdnGPVPQA7qAJp1dRwfyDQojwChJReX3s5zhLtzLe0yk3CBVKDKdua6AZBJ7LWWdHnlI~EtaSokmkRSZkjFg~93iE2fIGAaJfHm~PPdTy1uvVD4p7DnI6yPS30MMvirzR-8R~RUfD04Hd45eOBsZo5A7Q3LRhDyztfrHif8YD4oDuHhldedW0cwaXYo6Pg__" alt=""/>
                </div>
                <p>Elite pricing</p>
                <p>Lavish designs</p>
                <p>Extensive range of accessories</p>
                
            </div>
            
               
            </div>
            </form>
            <div className='d-flex center'>
                <button className='btn but'>Back</button>
                <button className='btn butt'>Next</button>

            </div>
            
               </div>
        );
    }
}
 
export default Package;