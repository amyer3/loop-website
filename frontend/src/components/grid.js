import React from 'react'
import "../grid/grid.css"
import strings from "../assets/strings/strings"
import styled from 'styled-components'

function formatNumber(numb){
    return new Intl.NumberFormat().format(numb)
}

const Grid = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 100%;
    grid-template-rows: 100vh 100vh 100vh 1vh;
    grid-template-areas: 
        "H1"
        "H2"
        "H3"
        "HF"
    margin-top: 2%;
    padding-left: 10%;
    padding-right: 10%;
`

const GridFloatHeader = styled.p`
    color: black;
    font-size: 32pt;
    padding: 0;
    min-height: 1%;
    margin: 0;
`

function Box(props){
    return(
        <div className={props.float}>
            <GridFloatHeader>{ props.headerKey }</GridFloatHeader>
            <GridFloatHeader>{ props.bodyKey }</GridFloatHeader>
            <img src= { props.photo } alt = ""/>
        </div>
    );
}

class GridBox extends React.Component {
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

    componentDidMount(){
        this.ID = setInterval(
            () => this.incrementCount(), 1500
        )
    }

    componentWillUnmount(){
        clearInterval(this.ID)
    }

    incrementCount(){this.setState((state) => {return{count: state.count +Math.floor(Math.random()*1200)}})}

    render(){
        return(
            <Grid>
                {this.section("left container", strings.leftStatHeader, strings.leftStatText, "")}
                {this.section("container",strings.centerStatHeader, strings.centerStatText, "")}
                {this.section("right container", ` ${formatNumber(this.state.count)} + `, strings.rightStatText, "")}
            </Grid>

        );
    }


}

export default GridBox