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
            src="./assets/images/iitp1.png"
            alt="First slide"
            style={ content.length ? {minHeight:"400px",maxHeight:"400px"} : {minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/images/iitp2.jpg"
            alt="Second slide"
            style={ content.length ? {minHeight:"400px",maxHeight:"400px"} : {minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/images/iitp3.jpg"
            alt="Third slide"
            style={ content.length ? {minHeight:"400px",maxHeight:"400px"} : {minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/images/iitp4.jpg"
            alt="Fourth slide"
            style={ content.length ? {minHeight:"400px",maxHeight:"400px"} : {minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/images/iitp5.jpg"
            alt="Fifth slide"
            style={ content.length ? {minHeight:"400px",maxHeight:"400px"} : {minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/images/iitp6.jpg"
            alt="Sixth slide"
            style={ content.length ? {minHeight:"400px",maxHeight:"400px"} : {minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/images/iitp7.jpg"
            alt="Seventh slide"
            style={ content.length ? {minHeight:"400px",maxHeight:"400px"} : {minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
      </Carousel>
    );
}

function Content({content}){
  if(content.length==0){
    return (
      <Carousel.Caption className="slide-content">
        <h1>WELCOME TO LOREM IPSUM</h1>
        <h2>IIT PATNA</h2>
        <h4>(lorem ipsum)</h4>
        <img className="logo" src="./assets/images/logo.png" />
        <p style={{color:"#fff"}} >A Govt. of India under initiative</p>
        <p style={{color:"#fff"}} >National Mission on Interdisciplinary Cyber Physical Systems (NM-ICPS)</p>
        <Button href="#">See How to Apply  <i className="fa fa-arrow-right"></i></Button>
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
        <div className="slide-container" style={ props.content.length ? {height:"400px"} : {height:"700px"}}>
            <ControlledCarousel style={{position:"relative"}} content={props.content}/>
            <Content content={props.content}/>
        </div>
    )
}   