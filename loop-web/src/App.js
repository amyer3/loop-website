import React from 'react';
import './App.css';
import Navbar from "./navbar/navbar";
import "./navbar/navbar.css"
import strings from "./assets/strings/strings"
import cover from "./assets/city-crossing.jpg"
import "./site-js/popInController"
import Footer from "./footer/footer";
import GridBox from "./grid/grid";
import ScreenshotBox from "./Screenshots/Screenshots";
import city_view from "./assets/la.jpg";
import lawn from "./assets/community-lawn.jpg";

/*
<link href="https://fonts.googleapis.com/css?family=Comfortaa|Cormorant+Unicase" rel="stylesheet">

OR

<style>
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Cormorant+Unicase');
</style>
 */

class First_box extends React.Component {
    componentDidMount(){
        // first padding should equal firstImage height - first height
        const firstHeight = document.getElementsByName("first").clientHeight;
        const imageHeight = document.getElementsByName("firstImage").clientHeight;
        document.getElementsByName("first").paddingBottom = imageHeight - firstHeight;

    }
    render(){
        return (
            <div id="first" className="content">
                <div className='img_container absolute'>&nbsp;
                    <img className="firstImage" src={city_view} alt=""/>
                </div>
                <p className='header gr1 relative'>{strings.homeSectionOneHeader}</p>
                <p className='subheader gr2 relative'>{strings.homeSectionOneText}</p>
                <GridBox className="gr3"/>
            </div>

        );
    }

}

function set_height(){

}

function Second_box() {
    return (
        <div id="second" className="content">
            <p className='header'>{strings.homeSectionTwoHeader}</p>
            <p className='subheader'>{strings.homeSectionTwoText}</p>
            <div className="centeralign fullwidth">
                <div className="floatR">
                    <p className="right-text">{strings.sectionTwoRightText}</p>
                </div>
                <img className="secondImage floatL twoboxgrid" src={lawn}/>
            </div>
        </div>
    );
}

function Third_box() {
    return (
        <div id="third" className="content">
            <p className='header'>{strings.sectionThreeHeader}</p>
            <p className='subheader'>{strings.sectionThreeText}</p>
            <ScreenshotBox/>
            <div className="buttons"><b>Beta open now ></b></div>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div id="bgimg">
                &nbsp;
            </div>

            <div id="outer">
                <First_box/>
                <Second_box/>
                <Third_box/>


            </div>


            <Footer/>
        </div>

    );
}

export default App;
