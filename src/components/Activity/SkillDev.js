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
                              <div style={{backgroundColor:"#0B4D89"}} className="activity-content">
                                <h3>Skill & Human Resource Development</h3>
                                <p className="text-white">
                                One of the objectives of the proposed TIH is to nurture and scale up high-end researchers' base, 
                                Human Resource Development (HRD) and skill-sets in the emerging areas of “Speech, Video and Text Analytics”. 
                                TIH will aim to enhance core competencies, capacity building and training to nurture innovation and start-up ecosystems 
                                to create the world-class multi-disciplinary Technology Innovation Hub in “Speech, Video and Text Analytics”, 
                                which will serve as the focal point for technology inputs for the industry and policy advice for the government in the allied disciplines. 
                                Government and Industry R&D labs will be engaged as partners in the proposed TIH. Private participation to encourage professional execution and management of pilot scale research projects will be incentivised. 
                                <br/>The proposed programme aims at providing the state-of-the-art training and capacity building for creation of next-generation technocrats, engineers and scientists in the areas of “Speech, Video and Text Analytics”. 
                                It will address various segments of the education system like graduates, postgraduates, Doctoral, post-doctoral, skilled, and semi-skilled segments. <strong>IIT PATNA VISHLESAN I-HUB FOUNDATION </strong> 
                                aims at addressing most of the HRD issues in a holistic manner preparing the country for the next technology revolution.
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
