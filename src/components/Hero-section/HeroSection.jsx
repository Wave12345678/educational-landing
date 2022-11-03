import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../../assests/images/hero-img1.png'
import './hero-section.css'
const HeroSection = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' >
                        <div className="hero__content">
                            <h2 className='mb-4'>Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule</h2>
                            <p className='mb-4'>Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Itaque odio iste consectetur,<br /> distinctio id  commodi quaerat ratione ab quae molestiae.</p>

                            <div className="search">
                                <input type="text" placeholder='Search' />
                                <button className="btn">Search</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <img src={heroImg} alt="" className='w-100' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeroSection
