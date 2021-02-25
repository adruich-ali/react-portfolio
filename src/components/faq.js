import React,{useState} from 'react';
import styled from 'styled-components';
import {About} from '../style';
import Toggle from './Toggel';
import {AnimateSharedLayout} from 'framer-motion';
import {UseScroll} from './useScroll';
import {scrollReveal} from '../animation';

const FaqSection = ()=>{
const [element, controls] = UseScroll();
return (
    <Faq variants={scrollReveal } ref={element} animate={controls} initial="hidden">
        <h2>Any Questions <span>Faq</span></h2>
        <AnimateSharedLayout>
        <Toggle title="How Do i Start?">
            <div className="answer" >
                <p>How u Start</p>
                <p>you have just Contact Us on our Email</p>     
            </div>
            <div className="faq-Line"></div>
        </Toggle>
        <Toggle title="How Much Time?">
            <div className="answer" >
                <p>it depent on your projects</p>
                <p>you have just Contact Us on our Email</p>   
            </div>
            <div className="faq-Line"></div>
        </Toggle>
        <Toggle title="how can i pay ?">
            <div className="answer" >
                <p>How u Start</p>
                <p> u have just Contact Us on our Email</p>
            </div>
            <div className="faq-Line"></div>
        </Toggle>
        <Toggle title="theres a reviwes ?">
            <div className="answer" >
                <p>Yes There s reviwes</p>
                <p>you have just Contact Us on our Email</p>
            </div>
            <div className="faq-Line"></div>
        </Toggle>
        </AnimateSharedLayout>

    </Faq>
)
}
const Faq = styled(About)`
padding:5rem 3rem;
display: block;
span{
    display: block;
}
h2{
    font-size:3rem;
    padding-bottom:1rem;
    font-weight:lighter;
}
.faq-Line{
    background:#cccccc;
    height:0.2rem;
    margin:1rem 0rem ;
    width:100%;
}
.question{
    padding:0rem 0rem;
    cursor:pointer;

}
h4{
         cursor:pointer;
        font-size:1rem;
    }
.answer{
    padding:1rem 0rem ;
    p{
        padding:0.3rem 0.1rem;
    }
}
`;

export default FaqSection;