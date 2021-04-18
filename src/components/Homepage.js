import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PicSlideShow from './PicSlideShow'
import Navbars from './Navbar/Navbar.js';
import Footers from './Footer/Footer.js';

import '../Styles/Homepage.css'
export default function Homepage() {
    return (
        <div>

            <Navbars />

            {/* Navbar */ }

            <PicSlideShow content=""/>

            {/* Welcome page with text */ }
            <section className="about-section">
                 <Container >
                     <Row >
                        <Col xl={6} >
                        <img
                          className="d-block w-100"
                          src="./assets/images/iitp4.jpg"
                          alt="Sixth slide"
                        />
                        </Col>
                        <Col xl={6}>
                        <h2>I-DAPT HUB FOUNDATION</h2>
                        <h4>Indian Institute of Technology,Patna</h4>
                        <p>We are the nodal centre and a Technology Innovation Hub (TIH) for technology development and activities in “Data Analytics and Predictive Technologies” and other related areas under National Mission on Interdisciplinary Cyber Physical Systems (NMICPS).</p>
                        </Col>
                     </Row>
                 </Container>
            </section>

           
            {/* Welcome page with text */ }
            
            {/* Calendar */ }

            <Footers />

        </div>
    )
}

