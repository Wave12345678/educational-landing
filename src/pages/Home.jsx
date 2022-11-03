import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/Hero-section/HeroSection'
import Company from '../components/Company-section/Company'
import About from '../components/About-us/About'
import Courses from '../components/Courses-section/Courses'
import ChooseUs from '../components/Choose-us/ChooseUs'
import Features from '../components/Features-section/Features'
import FreeCourse from '../components/Free-course-section/FreeCourse'
import Testimonials from '../components/Testimonials/Testimonials'

import NewsLetter from '../components/NewsLetter/NewsLetter'
import Footer from '../components/Footer/Footer'

const Home = () => {
    return (
        <div>
            <Fragment>
                <Header />
                <HeroSection />
                <Company />
                <About />
                <Courses />
                <ChooseUs />
                <Features />
                <FreeCourse />
                <Testimonials />
                <NewsLetter />
                <Footer />
            </Fragment>
        </div>
    )
}

export default Home
