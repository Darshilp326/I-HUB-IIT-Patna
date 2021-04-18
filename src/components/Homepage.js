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
            <section className="seminars-section">
                <Container>
                    <Row className="seminars">
                        <Col xl={7}>
                            <div className="semi-c">
                                <h1>Seminars & Conferences</h1>
                                <p></p>
                                <p>The TIH on interdisciplinary and core areas of data analytics and predictive technologies bears the national mandate to bring the best of technology to bring in most visible disruptions in traditional use of age old approaches. The motives are to push technology innovation to lead the cross cutting edges, all across the globe and its time to give back to the societal uplift and benefit.</p>
                            </div>
                        </Col>
                        <Col xl={5}>
                            <div className="seminar-box">

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="counter-stats">
                <Container>
                    <h1 className="counter-heading">Miles to go.....</h1>
                    <Row className="counter-row">
                    <Col className="stats" lg={2}>
                        <div className="circle-wrapper">
                            <div className="success circle"></div>
                            <div className="icon">
                            <i className="fa fa-check symbol"></i>
                            </div>
                            <div className="counting" data-count="15"> 
                                 15
                             </div>
                            <h5>IPRS</h5>
                        </div>
                    </Col>
                    <Col className="stats" lg={2}>
                        <div className="circle-wrapper">
                            <div className="success circle"></div>
                            <div className="icon">
                            <i className="fa fa-check symbol"></i>
                            </div>
                            <div className="counting">
                                 15
                            </div>
                            <h5>IPRS</h5>
                        </div>

                    </Col>
                    <Col className="stats" lg={2}>
                        <div className="circle-wrapper">
                            <div className="success circle"></div>
                            <div className="icon">
                            <i className="fa fa-check symbol"></i>
                            </div>
                            <div className="counting">
                                 15
                            </div>
                            <h5>IPRS</h5>
                        </div>

                    </Col>
                    <Col className="stats" lg={2}>
                        <div className="circle-wrapper">
                            <div className="success circle"></div>
                            <div className="icon">
                            <i className="fa fa-check symbol"></i>
                            </div>
                            <div className="counting">
                                 15
                            </div>
                            <h5>IPRS</h5>
                        </div>

                    </Col>
                    <Col className="stats" lg={2}>
                        <div className="circle-wrapper">
                            <div className="success circle"></div>
                            <div className="icon">
                            <i className="fa fa-check symbol"></i>
                            </div>
                            <div className="counting">
                                 15
                            </div>
                            <h5>IPRS</h5>
                        </div>

                    </Col>
                    <Col className="stats" lg={2}>
                        <div className="circle-wrapper">
                            <div className="success circle"></div>
                            <div className="icon">
                            <i className="fa fa-check symbol"></i>
                            </div>
                            <div className="counting">
                                 15
                            </div>
                            <h5>IPRS</h5>
                        </div>

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

