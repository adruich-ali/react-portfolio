import styled from 'styled-components';
import {motion } from 'framer-motion';
//!Styled Component
export const About = styled(motion.div)`
min-height:90vh;
display:flex;
align-items:center;
justify-content:space-between;
padding:2.5rem 3rem;
color:white;
@media (min-width: 768px) and (max-width: 1024px) {

}
`;
export const Discreption = styled.div`
flex:1;
padding-right:3rem;
z-index:2;
h2{
    font-weight: lighter;
    font-size: 2.5rem;
    letter-spacing:0.1rem
    
}
`;
export const Image = styled.div`
z-index:2;
flex:1;
overflow:hidden;
img{
    width:90%;
    height:80vh;
    object-fit:cover;
}
`;
export const Hide =styled.div`
overflow:hidden;
`;
