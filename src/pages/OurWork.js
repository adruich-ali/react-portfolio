import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//images
import athlete from '../img/athlete.jpg';
import astro from '../img/astro.jpg';
import racer from '../img/raicer.jpg';
import {motion } from 'framer-motion';
import {pageAnimation} from '../animation';
import {sliderContainer, 
        fade, 
        photoAnim, 
        LineAnim, 
        slider} from '../animation';
import {UseScroll} from '../components/useScroll';
import ScrollTop from '../components/scrolltop';


const OurWork = ()=> {
const [element , controls] = UseScroll();
const [element2, controls2 ]= UseScroll();
const [element3, controls3 ]= UseScroll();
return(
<Work 
variants={pageAnimation} 
initial="hidden" 
animate="show"
exit="exit"
style={{background:'#fff'}}>
<motion.div variants={sliderContainer} animate="show" initial="hidden">
    <Frame1 variants={slider}></Frame1>
    <Frame2 variants={slider}></Frame2>
    <Frame3 variants={slider}></Frame3>
    <Frame4 variants={slider}></Frame4>
</motion.div>
<Movie ref={element} variants={fade} animate={controls} initial="hidden">
    <motion.h2 variants={fade}> The Athlete</motion.h2>
    <motion.div variants={LineAnim} className="line"></motion.div>
    <Link to="/work/athlete">
    <Hide>
    <motion.img variants={photoAnim} src={athlete}  alt="athlete"/>
    </Hide>
    </Link>
</Movie>
<Movie ref={element2} variants={fade} animate={controls2} initial="hidden">
    <motion.h2 variants={fade} >The Astronaute </motion.h2>
    <motion.div variants={LineAnim} className="line"></motion.div>
    <Link to="/work/astronaute">
    <motion.img variants={photoAnim} src={astro} alt="astro"/>
    </Link>
</Movie>
<Movie ref={element3} variants={fade} animate={controls3} initial="hidden">
    <motion.h2 variants={fade}>The Racer</motion.h2>
    <motion.div variants={LineAnim} className="line"></motion.div>
    <Link to="/work/racer">
    <motion.img variants={photoAnim} src={racer} alt="racer"/>
    </Link>
</Movie>
<ScrollTop/>
</Work>
)
};
const Work = styled(motion.div)`
min-height:100vh;
overflow:hidden;
padding:5rem 10rem;

h2{
    padding:1rem 0rem ;
    font-size: 3rem;
}
`;
const Movie = styled(motion.div)`
padding-bottom:5rem;
.line{
    height:0.5rem;
    background: #23d997;
    margin-bottom:3rem;
}
img{
    width:100%;
    height:70vh;
    object-fit:cover;
}
`;
const Hide = styled.div`
overflow:hidden;
`;
//Frame Animation 
const Frame1 = styled(motion.div)`
 position:fixed;
 left:0;
 top:10%;
 width:100%;
 height:100vh;
 background:#fffebf;
 z-index:2;
`;
const Frame2 =styled(Frame1)`
background:#ff8efb;
`; 
const Frame3 =styled(Frame1)`
background:#8ed2ff;
`;
const Frame4 =styled(Frame1)`
background:#8effa0;
`;

export default OurWork;