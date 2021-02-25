import React from 'react';
//Animation
import {motion } from 'framer-motion';
import {pageAnimation, titleAnimat} from '../animation';
import styled from 'styled-components';
const ContactUs = ()=>{
return(
<ContactStyle 
exit="exit" 
variants={pageAnimation} 
initial="hidden" 
animate="show">
<Title>
   <Hide>
      <motion.h2 variants={titleAnimat}>
         Get in Touch.
      </motion.h2>
   </Hide>
</Title>
<div>
<Hide>
<Social variants={titleAnimat}>
<Circle/>
<h2>Send An Email</h2>
</Social>
</Hide>
<Hide> 
<Social variants={titleAnimat}>
<Circle/>
<h2>Dm us On Whatsapp</h2>
</Social>
</Hide> 
<Hide>
<Social variants={titleAnimat}> 
<Circle/>
<h2>Social Medio</h2>
</Social>
</Hide> 
</div>
</ContactStyle>
)
};
const ContactStyle = styled(motion.div)`
padding: 5rem 8rem;
color:#353535;
min-height:90vh;
background-color:white;
`;
const Title =styled.div`
font-size:3rem;
margin-bottom: 4rem;
color:black;
`;
const Hide = styled.div`
overflow:hidden;
h2{
   font-size:2.6rem;
}
`;
const Circle = styled.div`
border-radius:50%;
width:2rem;
height:2rem;
background-color:#353535;
`;
const Social = styled(motion.div)`
display:flex;
align-items:center;
h2{
   font-size:1.5rem;
   margin:2rem;
}
`;
export default ContactUs;