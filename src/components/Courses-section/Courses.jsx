
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CourseImg1 from '../../assests/images/web-design.png'
import CourseImg2 from '../../assests/images/graphics-design.png'
import CourseImg3 from '../../assests/images/ui-ux.png'
import './courses.css'
import CourseCard from './CourseCard'

const coursesData = [
    {
        id: '01',
        title: 'Web Design BootCamp for Begginers',
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: CourseImg1
    },
    {
        id: '02',
        title: 'Professional Graphics Design, Photoshop, Figma',
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: CourseImg2
    },

    {
        id: '03',
        title: 'UI/UX, bootcamp for begginers in 2022',
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: CourseImg3
    }
]

const Courses = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <div className="course__top d-flex justify-content-between align-items-center">
                            <div className="course__top__left w-50">
                                <h2>Our Popular Courses</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum alias tenetur hic, facere molestiae odit consectetur maxime dolorem fugit!</p>
                            </div>
                            <div className="w-50 text-end">
                                <button className="btn">See All</button>
                            </div>
                        </div>
                    </Col>
                    {
                        coursesData.map((item) => (
                            <Col lg='4' md='6'>
                                <CourseCard key={item.id} item={item} />
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        </section>
    )
}

export default Courses
