import React, {useState} from 'react';
import {Carousel,Button} from 'react-bootstrap';

function ControlledCarousel() {
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
            style={{minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/images/iitp2.jpg"
            alt="Second slide"
            style={{minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/images/iitp3.jpg"
            alt="Third slide"
            style={{minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/images/iitp4.jpg"
            alt="Fourth slide"
            style={{minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/images/iitp5.jpg"
            alt="Fifth slide"
            style={{minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/images/iitp6.jpg"
            alt="Sixth slide"
            style={{minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/images/iitp7.jpg"
            alt="Seventh slide"
            style={{minHeight:"700px",maxHeight:"700px"}}
          />
        </Carousel.Item>
      </Carousel>
    );
  }

export default function PicSlideShow(){
    return (
        <div className="slide-container">
            <ControlledCarousel style={{position:"relative"}}/>
            <Carousel.Caption className="slide-content">
                <h1>WELCOME TO LOREM IPSUM</h1>
                <h2>IIT PATNA</h2>
                <h4>(lorem ipsum)</h4>
                <img className="logo" src="./assets/images/logo.png" />
                <p>A Govt. of India under initiative</p>
                <p>National Mission on Interdisciplinary Cyber Physical Systems (NM-ICPS)</p>
                <Button href="#">See How to Apply  <i className="fa fa-arrow-right"></i></Button>
            </Carousel.Caption>
        </div>
    )
}   