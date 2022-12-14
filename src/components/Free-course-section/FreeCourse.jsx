import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './free-course.css'

import courseImg01 from '../../assests/images/web-development.png'
import courseImg02 from '../../assests/images/kids-learning.png'
import courseImg03 from '../../assests/images/seo.png'
import courseImg04 from '../../assests/images/ui-ux.png'
import FreeCourseCard from './FreeCourseCard'

const freeCourseCard = [
    {
        id: '01',
        title: 'Basic Web Development Course',
        imgUrl: courseImg01,
        student: 5.3,
        rating: 1.7

    },
    {
        id: '02',
        title: 'Coding For Junior Basic Course',
        imgUrl: courseImg02,
        student: 5.3,
        rating: 1.7

    },
    {
        id: '03',
        title: 'Search Engine Optimazation - Basic',
        imgUrl: courseImg03,
        student: 5.3,
        rating: 1.7

    },
    {
        id: '04',
        title: 'Basic UI/UX design - Figma',
        imgUrl: courseImg04,
        student: 5.3,
        rating: 1.7

    },
]

const FreeCourse = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='text-center mb-5 '>
                        <h2 className='fw-bold'>Our Free Courses</h2>
                    </Col>


                    {

                        freeCourseCard.map((item, index) => (
                            <Col lg='3' key={index}>
                                <FreeCourseCard item={item} />
                            </Col>
                        ))

                    }

                </Row>
            </Container>
        </section>
    )
}

export default FreeCourse
