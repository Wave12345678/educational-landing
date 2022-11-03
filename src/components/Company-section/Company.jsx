import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Company = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='2' md='3'>
                        <h3 className='d-flex align-items-xl-center gap-1'><i class="ri-vimeo-line"></i>Vimeo</h3>
                    </Col>
                    <Col lg='2' md='3' className='d-flex align-items-xl-center gap-1'><h3><i class="ri-pinterest-fill"></i>Pinterest</h3></Col>
                    <Col lg='2' md='3' className='d-flex align-items-xl-center gap-1'>
                        <h3><i class="ri-dribbble-line"></i>Dribble</h3>
                    </Col>
                    <Col lg='2' md='3' className='d-flex align-items-xl-center gap-1'>
                        <h3><i class="ri-apple-line"></i>Apple</h3>
                    </Col>
                    <Col lg='2' md='3' className='d-flex align-items-xl-center gap-1'>
                        <h3><i class="ri-finder-fill"></i>Finder</h3>
                    </Col>
                    <Col lg='2' md='3' className='d-flex align-items-xl-center gap-1'>
                        <h3><i class="ri-google-fill"></i>Google</h3>
                    </Col>

                </Row>
            </Container>

        </section>
    )
}

export default Company
