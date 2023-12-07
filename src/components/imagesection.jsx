import React, { Component } from 'react';
import './imagesection.css';

class Imagesection extends Component {
    state = {  } 
    render() { 
        return (
            
            <div className='d-flex p-5 ml-5'>
                <div className='pl-5'>
                    <img src='https://s3-alpha-sig.figma.com/img/ed89/3018/b5264b0ed1df9bd962d1ba4a6b899472?Expires=1702857600&Signature=Loms-PVKYCrDc0VAsqllJCl~J0d-wRbvbEb3IQguJKCeG629rqfuNpi7T-yHS606oMUHu6omCJg6WPCG9bxk9ATtF6Vh0JCYOJtNHxnUnd7-QgEBxrQvw6fyRZFMa5Z6k1rEMqjdNDDcHMQTjBmUVKNZRBsq2d-OA23lchaOdhS44MeK8BfUJPYKeTGsLN9oNh1YpJDrqXIE-1ckHMSlz-CCVX8aNtRJWHCJsA6XB6W8gN~ErDo4fZArIs33ws8pxqMDmCUlifR~C04V-u3RALtV~k~CL7mI9lxrjHkSCs3PFhcnzsyfDhCOPaAZ8fzdoJYOf-5dBIIc4CJdkGZTVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='img' className='img'></img>
                    <h1 className='typo'>Villa Furnishing & Interior</h1>
                    <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla <br/> dui amet faucibus nam. Erat id laoreet posuere etiam morbi.</p>
                </div>
                <div className='pl-5'>
                    <img src='https://s3-alpha-sig.figma.com/img/9e15/257f/4e060b8bfd925c960add0b9cb5788e8c?Expires=1702857600&Signature=ow9UDTIK7g1W8pdveridY0l8t5sVen6a5zm8bP47lwzcuvlwlRdRjq1R2a3tluVPogPrHI5j8TXOk-Peq6kwrUMMQyEkaEMCw917cW9hSEOQd4jNRKhOz2GVlW30rBJ9uwgL6O~zvEqyp-tlDXuKRUBEOlmsIZr9Qe4xjoK9pZXtgWA8xLetyHOXCoWRpc11-aH3I6804TXkJxAy5WYk9VZLCvGe~LtS9lOpDhig1VG4lkPMkgO9YeHx18PCZprz0G-LTXKTHzkzPd1I9H9S~PR9gO6E3-Bkv5emN994F4Mtl535xDFDR2gGHAmNRBLu~QJKEoeRW06BpzJVHas57g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='img' className='img'></img>
                    <h1 className='typo'>Residence Swimming Pool</h1>
                    <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Faucibus fringilla dui amet faucibus nam.</p>
                </div>
            </div>
            
        );
    }
}
 
export default Imagesection;