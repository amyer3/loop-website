import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ContactForm from "./contactForm/ContactForm"
import styled from 'styled-components'
import h1bottom from './components/h1_bottom.svg'
import TopTriangle from './components/topTriangle.svg'
import BottomTriangle from './components/bottomTriangle.svg'
import ScreenshotBox from "./components/Screenshots";
import social from './components/001-social-care.svg'
import savings from './components/piggy-bank.svg'
import video from './assets/video_t.mp4'

/*
<link href="https://fonts.googleapis.com/css?family=Comfortaa|Cormorant+Unicase" rel="stylesheet">

OR

<style>
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Cormorant+Unicase');
</style>
 */

const Grid = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 100vw;
    grid-template-rows: auto auto auto auto auto;
    grid-template-areas: 
        "H1"
        "H2"
        "H3"
        "H4"
        "HF"
        ;
`

const Box = styled.div`
    display: grid;
    grid-template-rows: 10% 80% 10%;
    grid-template-columns: 10% 35% 10% 35% 10%;
    
    grid-template-areas: 
    "head head head head head"
    "Lspace LCol cspace RCol Rspace"
    "foot foot foot foot foot";
    
    width: 100vw;
    height: 90vh;
    grid-area: ${props => props.area};
    background: ${props => props.bgc};
`
const Col = styled.div`
    grid-area: ${props => props.area};
    width: 100%;
    height: 100%;
`
const Svg = styled.img`
    align-self: ${props => props.align};
    grid-area: ${props => props.area};
    width: 100vw;
    height: auto;
`

const FA = styled.img`
    align-self: ${props => props.align};
    grid-area: ${props => props.area};
    width: ${props => props.width}vw;
    height: auto;
    justify-self: center;
    align-self: center;
`

const BigWord = styled.p`
    justify-self: center;
    align-self: center;
    font-size: 38px;
    color: ${props => props.color};
    ${props => props.margin === "L" ? "": "text-align: end;"}
    line-height: 100%
    margin-top: ${props => props.marginTop}%;
    font-weight: bold;
`
const SmallWord = styled.p`
    font-size: 18px;
    line-height: 100%
    color: ${props => props.color};
    ${props => props.margin === "L" ? "": "text-align: end;"}
    font-weight: 300;
`

const CTA = styled.div`
    background: rgba(70, 155, 217, 1);
    border-radius: 5px;
    float: ${props => props.floats};
    margin-top: 5%;
    padding: 2.5%;
    width: auto;
    max-width: 15vw;
    text-align: center;
    font-size: 18px;
    color: white;
`
const VideoFrame = styled.div`
    margin-top: 12%
    background: red;
    width: 494px;
    height: 278px;
    justify-self: center;
    align-self: center;
    zindex: 2;
`


function H1(){
    return(
        <Box bgc='rgba(80, 23, 81, 1)' area="H1">
            <Navbar/>
            <Col area="LCol">
                <BigWord color="white" margin="L" marginTop={20}>
                    Investing in the communities
                    <br/>
                    the banks abandoned
                </BigWord>
                <SmallWord color="white" margin="L">
                    We’re on a mission to bring fairer lending,
                    <br/>
                    accessable investing, and relatable resources
                    <br/>
                    to the communities that need it most
                </SmallWord>
                <CTA floats='left'>
                    Learn More
                </CTA>
            </Col>
            <Col area="RCol">
                <VideoFrame>
                    <video height="100%" width="100%" controls>
                        <source src={video} type="video/mp4"/>
                    </video>
                </VideoFrame>
                <SmallWord color="white" margin="L">
                    Our Founder on the current situation, and our solution.
                </SmallWord>
            </Col>
            <Svg src={h1bottom} area="foot" align="self-end"/>
        </Box>
            )
}

function H2(){
    return(
        <Box area='H2'>
            <FA area="LCol" src={savings} margin="L" width={25}/>
            <Col area="RCol">
                <BigWord marginTop={25}>
                    A proven method rooted
                    <br/>
                    in a savings-first mentality
                </BigWord>
                <SmallWord>
                    By following our curriculum, our users save up to 16% more.
                    That's a tangible difference, and the bedrock to building real,
                    meaningful wealth.
                </SmallWord>
            </Col>
        </Box>
    )
}

function H3(){
    return(
        <Box area="H3" bgc="rgba(220, 229, 239, 1);">
            <Svg src={TopTriangle} area="head"/>
            <Col area="LCol">
                <BigWord margin="L" marginTop={32}>
                    Empowering communities
                    <br/>
                    by believing in them
                </BigWord>
                <SmallWord margin="L">
                    We deploy capital to the best and brightest - those with the best ideas on how to improve their
                    communities - that are invisible to the banks
                </SmallWord>
            </Col>
            <FA area="RCol" src={social} width={20}/>
            <Svg src={BottomTriangle} area="foot" align="self-end"/>
        </Box>
    )
}

function H4(){
    return(
        <Box area="H4">
            <Col area="LCol">
                <ScreenshotBox/>
            </Col>
            <Col area="RCol">
                <BigWord marginTop={25}>
                    THIS IS OUR APP
                    <br/>
                    GET IT NOW
            </BigWord>
                <SmallWord>
                    Short term lenders have a stranglehold
                    <br/>
                    on communities with no other options
                </SmallWord>
                <CTA floats={'right'}>
                    Register for the Beta
                </CTA>

            </Col>
        </Box>
    )
}

function homeOpenNav(){
        document.getElementById("mySidenav").style.width = "250px";
};


export default function App() {
    return (
        <div className="App">
            <ContactForm id = "mySidenav"/>
            <Grid>
                <H1/>
                <H2/>
                <H3/>
                <H4/>
                <Footer/>
            </Grid>
        </div>

    );
}
