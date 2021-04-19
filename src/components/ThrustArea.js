import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PicSlideShow from './PicSlideShow'
import './Activity/activity.css'
export default function ThrustArea() {
    return (
        <div>
            <PicSlideShow content="THRUST AREAS" />
            <section className="contact-section ptb-80">
                <Container>
                    <Row xs={12} md={12} lg={12}>
                        <Col>
                          <div className="activity-content">
                            <h3>Thrust Area</h3>
                            <p>
                            The multidisciplinary Vishlesan I-Hub Foundation at IIT Patna under Technology Incubation Hub (TIH) targets to leverage Research and Engineering capabilities of Sustainable Development Goals and achieve the mandate of National Mission on Interdisciplinary Cyber Physical Systems. The Vishlesan I-Hub Foundation at IIT Patna promotes the progression of Technology Readiness Level (TRL) for development of indigenous system mainly in the broad areas of “Speech, Video and Text Analytics” in the following application domains:

 

Health, Education, Tourism, Judiciary, Railways, Border Management, Security, Environment, Forest and Climate Change, Road Transport, Housing and Urban Affairs, and Electronics and IT.

The Vishlesan I-Hub at IIT Patna also encourages to leverage other related areas for technology development, innovation, professional education, entrepreneurship, brand building, technology commercialization, and product management for the dissemination and deployment of intellectual property; and for public outreach. At IIT Patna, Vishlesan I-Hub under TIH acts as a Section 8 Company to spearhead the activities in “Speech, Video and Text Analytics Technologies” and other related areas under TIH.


                            </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Footer */}
        </div>
    )
}
