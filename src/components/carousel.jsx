import React, { Component } from 'react';
import './carousel.css';


class  Carousel extends Component {
    imageUrl = 'https://s3-alpha-sig.figma.com/img/fc1f/24ff/6f7ad2b6addde44c97e2e9165ad32656?Expires=1702252800&Signature=PJP-Fd~jd0hoy-SJZMfS-E8fCKP9i7tUFETPrsrZL6Y5rFarUFv1msiVR6IgbiKBHlG7YVfBlDYFPo9byGs7-q31Y1lEg1A8YecXh0DPKNdG2jQlMT~2WkXyRnIbh0eJUmGL0s-~86oCJH0C98vj-D1pK39GHaPcYvsCrqrebZZqv9viCs1cQwDlqNodpXYiA3pzv169YVAhwrOYyiGNtXLGoriVrE1fCHs1Mg~bCK9Hk1BO3VdnZt3xgsbo3RVfQM~cI3Kw4Izgve6m46VotGN7Srx0I5I7suPr5C8QENolr6ozsLkTeB5XTG0ipAmU-KA84iUQuM-o16xUhuBqRA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    state = { 
        images: [this.imageUrl,'https://media.designcafe.com/wp-content/uploads/2022/09/07162345/kitchen-interior-design-cost.jpg','https://media.designcafe.com/wp-content/uploads/2021/09/15180410/pop-ceiling-designs-for-hall.jpg']
    } 
    render() { 
    
        return (
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {this.state.images.map((img,idx)=> this.getCarouselFrame(img,idx))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
      );
    }

    getCarouselFrame = (url,idx)=>{
        let str = 'carousel-item';
        str += idx===0 ? ' active' : '';
        return (
            <div className={str} key={idx}>
                <img className="d-block w-100 carousel-image" src={url} alt={'broken-'+idx}></img>
            </div>
        )
    }
}
 
export default Carousel;