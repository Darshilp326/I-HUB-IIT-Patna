import React, {useState} from 'react';
import {Carousel,Button} from 'react-bootstrap';

function ControlledCarousel({content}) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/images/iitp1-min.png"
            alt="First slide"
            style={ content ? {minHeight:"400px",maxHeight:"400px"} : {minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/images/iitp2-min.jpg"
            alt="Second slide"
            style={ content ? {minHeight:"400px",maxHeight:"400px"} : {minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/images/iitp3-min.jpg"
            alt="Third slide"
            style={ content ? {minHeight:"400px",maxHeight:"400px"} : {minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/images/iitp4-min.jpg"
            alt="Fourth slide"
            style={ content? {minHeight:"400px",maxHeight:"400px"} : {minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/images/iitp5-min.jpg"
            alt="Fifth slide"
            style={ content ? {minHeight:"400px",maxHeight:"400px"} : {minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/images/iitp6-min.jpg"
            alt="Sixth slide"
            style={ content ? {minHeight:"400px",maxHeight:"400px"} : {minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/images/iitp7-min.jpg"
            alt="Seventh slide"
            style={ content ? {minHeight:"400px",maxHeight:"400px"} : {minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
      </Carousel>
    );
}

function Content({content}){
  if(content==""){
    return (
      <Carousel.Caption className="slide-content">
        <h2>WELCOME TO IIT PATNA VISHLESAN I-HUB FOUNDATION</h2>
        <h3>IIT PATNA</h3>
        <h4>(A section 8-Not for Profit Company)</h4>
        <img className="logo" src="./assets/images/logo-min-1.png" />
        <p style={{color:"#fff",textAlign:"center"}} >A Govt. of India Initiative under</p>
        <p style={{color:"#fff",textAlign:"center"}} >National Mission on Interdisciplinary Cyber Physical Systems (NM-ICPS) forSpeech, Video and Text Analytics Technologies
</p>
        {/* <Button href="#" className="car-btn">See How to Apply  <i className="fa fa-arrow-right"></i></Button> */}
      </Carousel.Caption>
    );
  }else if(content=="login" || content=='register'){
    return null;
  }else{
    return (
      <Carousel.Caption className="slide-content1">
        <h1>{content}</h1>
      </Carousel.Caption>
    );
  }
}

export default function PicSlideShow(props){
    return (
        <div className="slide-container" style={ props.content ? {height:"400px"} : {height:"700px"}}>
            <ControlledCarousel style={{position:"relative"}} content={props.content}/>
            <Content content={props.content}/>
        </div>
    )
}   