import React from 'react'
import "./grid.css"
import strings from "../assets/strings/strings"

function formatNumber(numb){
    return new Intl.NumberFormat().format(numb)
}

function Box(props){
    return(
        <div className={props.float}>
            <p className="gridFloatHeader">{ props.headerKey }</p>
            <p className="gridFloatText">{ props.bodyKey }</p>
            <img src= { props.photo } alt = ""/>
        </div>
    );

}

class GridBox extends React.Component {
    // this creates the initial state
    constructor(props){
        super(props);
        this.state = {count: 4000000}
    }

    section(float, headerKey, bodyKey, photo){
        return(
            <Box
                float = {float}
                headerKey = {headerKey}
                bodyKey = {bodyKey}
                photo = {photo}
            />

        )
    }

    // on component mount creates an interval (this.ID) and updates it every 5000ms
    componentDidMount(){
        this.ID = setInterval(
            () => this.incrementCount(), 1500
        )
    }

    //on component unmount clears the interval in this.ID
    componentWillUnmount(){
        clearInterval(this.ID)
    }

    //this take the current state, and updates it with a random number
    incrementCount(){this.setState((state) => {return{count: state.count +Math.floor(Math.random()*1200)}})}

    render(){
        return(
            <div className="gridHolder">
                {this.section("left container", strings.leftStatHeader, strings.leftStatText, "")}
                {this.section("container",strings.centerStatHeader, strings.centerStatText, "")}
                {this.section("right container", ` ${formatNumber(this.state.count)} + `, strings.rightStatText, "")}
            </div>

        );
    }


}



export default GridBox