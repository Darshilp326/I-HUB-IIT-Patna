import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PicSlideShow from '../PicSlideShow'
import './activity.css'
export default function SkillDev() {
    return (
        <div>
            <PicSlideShow content="SKILL & HUMAN RSOURCE DEVELOPEMENT"/>
                <section className="contact-section ptb-80">
                    <Container>
                        <Row xs={12} md={12} lg={12}>
                            <Col>
                              <div className="activity-content">
                                <h3>Skill & Human Resource Development</h3>
                                <p>DAPT is a disruptive technologies and technology-driven system. It may pose unemployment once complete automation is undertaken. At the same time, it provides an opportunity for job seekers to create job avenues in highly skilled areas. DAPT is a global phenomenon and it operates on fusion of technologies. Therefore, India should concentrate on an interdisciplinary approach and develop cross-cutting fusion technologies. Thus, the proposed programme aims at providing the state-of-the-art training and capacity building for creation of next-generation technocrats, engineers and scientists. It will address at various segments of education system like graduates, postgraduates, Doctoral, post-doctoral, skilled and semi- skilled segments. NM-DAPT aims at addressing most of the HRD issues in a holistic manner preparing the country for the next technology revolution.</p>
                              </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* Footer */}
        </div>
    )
    
}
