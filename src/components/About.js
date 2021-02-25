import React from 'react';
import home1 from '../img/home.png';
//import FarmerMotion
import {motion} from 'framer-motion'; 
import {titleAnimat, fade,photoAnim} from '../animation';
import {About,Discreption,Image,Hide} from '../style';
import Wave from './wave';
const AboutSection = () => {
    return(
     <About>
       <Discreption>
         <motion.div className="title">
             <Hide>
                 <motion.h2 variants={titleAnimat}> We are here To Make</motion.h2>
             </Hide>
             <Hide>
                 <motion.h2 variants={titleAnimat}>Your <span>Dreams</span> Come</motion.h2>
             </Hide>
             <Hide>
                 <motion.h2 variants={titleAnimat}>true.</motion.h2>
             </Hide>           
         </motion.div>
          <motion.p variants={fade} >Contact us for any photography or vidéography and let's make something Special</motion.p>
          <motion.button variants={fade} > Contact Us</motion.button>
       </Discreption>
       <Image>
           <motion.img variants={photoAnim} src={home1} alt="Me"/>
       </Image>
       <Wave/>
     </About>
    )
};

export default AboutSection ;   