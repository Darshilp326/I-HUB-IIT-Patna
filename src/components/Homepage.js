import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PicSlideShow from './PicSlideShow'
import RevoCalendar from 'revo-calendar';
import 'revo-calendar/dist/index.css';

import Navbars from './Navbar/Navbar.js';
import Footers from './Footer/Footer.js';

import '../Styles/Homepage.css'


export default function Homepage() {

    var events = [
        {
          name: 'Buyout',
          date: +new Date(),
          allday: true
        },
        {
          name: 'Reservation',
          date: "April 22 2021",
          extra: {
            icon:
              'M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09           4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z',
            text: '7 People coming for lecture' 
          }
        }
      ]





    return (
        <div>

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
                        <h2>VISHLESHAN I-HUB FOUNDATION</h2>
                        <h4>Indian Institute of Technology,Patna</h4>
                        <p>
                        We are the nodal center and a Technology Innovation Hub (TIH) for technology development and activities in “Speech, Video, and Text Analytics Technologies” and other related areas under National Mission on Interdisciplinary Cyber-Physical Systems (NMICPS)."  
                        </p>
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
                                <p>
                                Under the proposed TIH, IIT Patna aims to promote translational research in CPS technologies, especially in “Speech, Video and Text Analytics”. Various tools and techniques by using the latest AI based techniques for various real-life problems emcompassing the inputs of speech, video and text will be developed. Various real-life problems collected from various domains like tourism, judiciary, railways, border management, security, environment, forest and climate change, education and health, electronics and IT, road transport, housing and urban affairs will be solved under the research activities of TIH. Advanced tools and techniques for handling the speech, video and text data will be designed. The target would be to develop methodologies involving “Speech, Video and Text Analytics” to solve various problems in Indian context.    
                                </p>
                            </div>    
                        </Col>
                        <Col xl={5}>
                            <div className="seminar-box">

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <section className="counter-stats">
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

            </section> */}

            <br/><br/>
            <br/><br/>
            <br/><br/>
            
           
            {/* Welcome page with text */ }

            <div style={{padding: "50px",}} >

            <RevoCalendar

                style={{
                    borderRadius: "5px",
                    boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                
                events={events}

                highlightToday={true}     
                lang="en"
                primaryColor="#216583"
                secondaryColor="#D7E6EE"
                todayColor="#3B3966"
                textColor="#333333"
                indicatorColor="orange"
                animationSpeed={300}
                sidebarWidth={180}
                detailWidth={280}
                showDetailToggler={true}
                showSidebarToggler={true}
                onePanelAtATime={false}
                openDetailsOnDateSelection={true}
                timeFormat24={true}
                showAllDayLabel={false}
                detailDateFormat="DD/MM/YYYY"
                />
                </div>

            {/* Calendar */ }
            <br/><br/>
            <br/><br/>
            <br/><br/>

        </div>
    )
}

