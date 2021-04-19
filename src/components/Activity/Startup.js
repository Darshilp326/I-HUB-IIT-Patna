import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PicSlideShow from '../PicSlideShow'
import './activity.css'
export default function Startup() {
    return (
        <div>
            <PicSlideShow content='INNOVATION & START-UP ECOSYSTEM'/>
            <section className="contact-section ptb-80">
                <Container>
                    <Row xs={12} md={12} lg={12}>
                        <Col>
                          <div style={{backgroundColor:"#0B4D89"}} className="activity-content">
                            <h3>Innovation, Entrepreneurship and Start-up Ecosystem:</h3>
                            <p className="text-white">
                            Another major objective of the proposed TIH is to enhance core competencies, capacity building, and training to nurture innovation and the Start-up ecosystem in the areas of “Speech, Video, and Text Analytics”.  IIT Patna TIH aims to equip the incubate entity with all the world-class facilities, equipment, and services that are essential to convert the idea/ concept to a successful business. The incubates will be provided with techno business mentorship to prune and refine the idea from the concept board level to an organizational setup. They will be encouraged to fail-fast to ensure efficient utilization of high-tech resources made available. IIT Patna TIH aims to create a holistic ecosystem for encouraging R&D, innovation, and Entrepreneurship in the CPS domain. It will enable the creation of IPR within the country for maximizing the domestic value add and diminishing the external dependency in the CPS domain providing assistance during prototyping, development, and commercialization for the products produced through the scheme for India and other growth markets. Employments at various levels will be created under TIH IIT Patna. Long-term partnerships with strategic sectors will be established focusing on the theme of “Speech, Video and Text Analytics”. The major emphasis will be on IP creation and product development to result in increased domestic value addition in the field of “Speech, Video and Text Analytics”. IIT Patna TIH will demonstrate the unique integration of academia, industry, government, and Incubation ecosystems on the theme of “Speech, Video and Text Analytics”.
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
