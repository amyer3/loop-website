import React from 'react';
import "./Screenshots.css"
import screen2 from "../assets/goals-screen.png"
import screen1 from "../assets/money-screen.png"



class ScreenshotBox extends React.Component{

    render(){
        return(
            <div className="screenHolder">
                <img className="screen upper" src={screen1} alt=""/>
                <img className="screen lower" src={screen2} alt="" />
            </div>
        );
    }
}

export default ScreenshotBox

//screens need to have a solid background, and remove Sandberg