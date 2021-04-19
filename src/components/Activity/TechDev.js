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
                          <div style={{backgroundColor:"#0B4D89"}} className="activity-content">
                            <h3>Technology Development</h3>
                            <p className="text-white">
                            Technology Development through expert-driven research, consortium-based mission-oriented research through cluster-based network programs, 
                            directed research for the specific requirements of Industry, other Govt verticals, and International Collaborative Research Programmes.
                            <br/>The proposed TIH aims to develop technologies, prototypes and demonstrate associated applications pertaining to national priorities and competence in “Speech, 
                            Video and Text Analytics” by carefully selecting the impactful and innovative technologies for the future to work on; crafting harmonious collaboration within 
                            and outside IIT Patna for knowledge creation and dissemination; catalyzing the conversion of such knowledge into tools, platforms, products for wider use
                            creating and sustaining commercial viability for the long run.
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
