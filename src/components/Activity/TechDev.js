import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PicSlideShow from '../PicSlideShow'
import './activity.css'
export default function TechDev() {
    return (
        <div>
            <PicSlideShow content="TECHNOLOGY DEVELOPEMENT" />
            <section className="contact-section ptb-80">
                <Container>
                    <Row xs={12} md={12} lg={12}>
                        <Col>
                          <div className="activity-content">
                            <h3>Technology Development</h3>
                            <p>
                            Technology Development through expert-driven research, consortium-based mission- oriented research through cluster-based network programmes, directed research for the specific requirements of Industry, other Govt verticals and International Collaborative Research Programmes.
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
