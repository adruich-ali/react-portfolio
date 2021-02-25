import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Nav =()=>{
    return(
        <StyledNav>
            <h1> <Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">About Us</Link>
                </li>
                <li>
                    <Link to="/work">Our Work</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </StyledNav>
    )
};
const StyledNav = styled.nav`
min-height:10vh;
display:flex;
margin:auto;
justify-content:space-between;
align-items:center;
padding:1rem 3rem;
background-color:#282828;
position: sticky;
top:0;
z-index:1000;
a{
    font-size:0.9rem;
    color:white;
    text-decoration: none;
}
ul{
    list-style:none;
    display: flex;
}
#logo{
    font-size:1.2rem;
    font-family:"Lobster", cursive;
    font-weight:lighter;
}
li{
    padding-right:4rem;
    padding-left:5rem;
    position:relative;
}
`;
export default Nav;