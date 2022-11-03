import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'

import chooseImg from '../../assests/images/why-choose-us.png'
import './chooseus.css'
import ReactPlayer from 'react-player'


const ChooseUs = () => {


    const [showVideo, setShowVideo] = useState(false)
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="choose__content">
                            <h2>Why Us</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem pariatur architecto corporis, assumenda labore. Quia dolorem quasi quis omnis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, facilis. Earum ipsa reiciendis iusto perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi at, sequi aperiam eius corporis unde esse dignissimos quos in perspiciatis!</p>
                        </div>
                    </Col>

                    <Col lg='6'>
                        <div className="choose__img">

                            {
                                showVideo ? <ReactPlayer url='https://www.youtube.com/watch?v=_g45BJCAXu4' controls width='100%' height='300' /> : <img src={chooseImg} alt="" className='w-100' />
                            }


                            {
                                !showVideo && (
                                    <span className="play__icon">
                                        <i class="ri-play-circle-line" onClick={() => setShowVideo(!showVideo)}></i>
                                    </span>
                                )
                            }



                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default ChooseUs
