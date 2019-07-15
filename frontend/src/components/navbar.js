import React from 'react';
import mail from "../assets/mail-icon.svg"
import menu from "../assets/menu.svg"
import text from "../assets/strings/strings"
import styled from 'styled-components'

function openNav(){
    document.getElementById("mySidenav").style.width = "250px";
}

const Nav = styled.span`
    background-color: transparent;
    width: 100%;
    height: 2%;
    position: absolute;
    z-index: 2;
    display: grid;
    align-items: center;
    grid-template-columns: 7% 43% 42% 8%;
    grid-template-rows: 100%;
    grid-template-areas: "leftpad name contact rightpad";
`

const Menu = styled.div`
    self-align: end;
    display: inline-block;
`

const CompanyName = styled.div`
    font-family: "Comfortaa", sans-serif;
    font-size: 18pt;
    display: inline-block;
    grid-area: name;
    color: white;
    width: 100%
    text-align: left;
`

const ContactUs = styled.a`
    font-family: "Comfortaa", sans-serif;
    color: white;
    display: inline-block;
    grid-area: contact;
    text-decoration: none;
    text-align: right;
`

class Navbar extends React.Component {
    render(){
        return(
             <Nav>
                <CompanyName>{text.companyName}</CompanyName>
                <ContactUs href='mailto:sean@loopinvesting.com?' >Contact</ContactUs>
            </Nav>
        //
            // onClick={openNav}
    );
    }
}






export default Navbar;