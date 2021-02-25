import React from 'react';
//import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import {About,Discreption,Image,Hide} from '../style';
import styled from 'styled-components';
import {scrollReveal } from '../animation';
import{UseScroll} from './useScroll';



const ServicesSection = ()=> {
const [element, controls] = UseScroll();
    return(
      <Services variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
          <Discreption>
              <h2>High <span>Qualty</span> Services</h2>
              <Cards>
                  <Card>
                      <div className="icon">
                           <img alt="icon"  src={clock}/>
                          <h3>Efficient</h3>
                      </div>
                      <p>We Will Craete Ur Project Quick like sonic</p>
                  </Card>
                  <Card>
                      <div className="icon">
                          <img alt="icon"  src={money}/>
                          <h3>MoneyLess</h3>
                      </div>
                      <p>We Will Craete Ur Project Quick like sonic</p>
                  </Card>
                  <Card>
                      <div className="icon">
                          <img alt="icon"  src={diaphragm}/>
                          <h3>Diaphragm</h3>
                      </div>
                      <p>We Will Craete Ur Project Quick like sonic</p>
                  </Card>
                  <Card>
                      <div className="icon">
                          <img alt="icon" src={teamwork}/>
                          <h3>Teamwork</h3>
                      </div>
                      <p>We Will Craete Ur Project Quick like sonic</p>
                  </Card>
              </Cards>
          </Discreption>
          <Image >
              <img alt="camera" src={home2}/>
          </Image>
      </Services>
    )   
};

const Services = styled(About)`
padding-top:10rem;
h2{
    padding-bottom:5rem;
}
p{
    width:70%;
    padding:2rem 0rem 4rem 0rem;
}
`;
const Cards = styled.div`
display:flex;
flex-wrap: wrap;
`;
const Card = styled.div`
flex-basis:15rem;
.icon{
    display:flex;
    align-items:center;
    h3{
        margin-left:1rem;
        background:white;
        color:black;
        padding:1rem;
    }
}
`;
const Disc = styled(Discreption)`
padding-left:3rem;
padding-right:3rem;
`;
export default ServicesSection;