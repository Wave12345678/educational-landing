

import React from 'react'

const FreeCourseCard = (props) => {


    const { imgUrl, title, student, rating } = props.item;
    return (
        <div className="single__free_course">
            <div className="free__course__img mb-4">
                <img src={imgUrl} alt="" className='w-100' />
                <button className="btn free__btn">
                    Free
                </button>
            </div>

            <div className="free__course__details">
                <h6>{title}</h6>

                <div className="d-flex align-items-center gap-5">
                    <span className="d-flex align-items-center gap-2"><i class="ri-user-line"></i>
                        {student}K</span>
                    <span className="d-flex align-items-center gap-2"><i class="ri-star-fill"></i>{rating}K</span>
                </div>
            </div>
        </div>
    )
}

export default FreeCourseCard
