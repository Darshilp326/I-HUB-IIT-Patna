import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PicSlideShow from '../PicSlideShow'
import './activity.css'
export default function InternationalCollab() {
    return (
        <div>
            <PicSlideShow/>
            <section className="contact-section ptb-80">
                <Container>
                    <Row xs={12} md={12} lg={12}>
                        <Col>
                          <div className="activity-content">
                            <h3>International Collabaration</h3>
                            <p>To establish and strengthen the international collaborative research for cross-fertilization of ideas.</p>
                            <p>The advent of networking has made the world a global village. Innovations happening across the globe are not only affecting the global economy but also the global skill. Therefore, catching international development is the need of the hour. International collaboration and collaborative research proposed by DAPT aim at bringing the global research paradigms and connecting to the Indian researchers.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Footer */}
        </div>
    )
}
