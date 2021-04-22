import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PicSlideShow from './PicSlideShow'
import './Activity/activity.css'
export default function Incubation() {
    return (
        <div>
            <PicSlideShow content='INNOVATION ECOSYSTEM'/>
            <section className="contact-section ptb-80">
                <Container>
                    <Row xs={12} md={12} lg={12}>
                        <Col>
                          <div style={{backgroundColor:"#0B4D89"}} className="activity-content">
                            <h3>Innovation, Entrepreneurship and Start-up Ecosystem:</h3>
                            <p className="text-white">Some incubation activities will start soon under the umbrella of TIH @ IIT Patna</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
          
        </div>
    )
}
