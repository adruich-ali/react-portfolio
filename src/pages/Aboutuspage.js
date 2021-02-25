import React from 'react';
//import About Section 
import AboutSection from '../components/About';
//import Services Section
import ServicesSection from '../components/Services';
//import Services Section
import FaqSection from '../components/faq';
import {motion } from 'framer-motion';
import {pageAnimation} from '../animation';
import ScrollTop from '../components/scrolltop';

const AboutUs = () => {
    return(
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <AboutSection/>
            <ScrollTop/>
            <ServicesSection/>
            <FaqSection/>
        </motion.div>
    )
}
export default AboutUs; 