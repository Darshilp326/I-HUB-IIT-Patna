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
                          <div className="activity-content">
                            <h3>Innovation, Entrepreneurship and Start-up Ecosystem:</h3>
                            <p>To enhance core competencies, capacity building and training to nurture innovation and Start-up ecosystem.</p>
                            <p>The international novelty standard operates in a cycle wherein innovative ideas are funded to generate prototypes and get patents leading to a series of start-ups. Established industry players lookout for technologies through patent portals however, this paradigm is loosely operating in India. An analysis of International Patents data will be the huge problem that India is facing in the area of monetization of innovations.</p>
                          </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Footer */}
        </div>
    )
}
