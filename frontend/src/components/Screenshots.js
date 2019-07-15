import React from 'react';
import screen from "../assets/screens.png"
import styled from 'styled-components'

const ScreenHolder = styled.div`
    width:100%;
    text-align: center;
    display: block;
    margin-bottom: 1%;

`
const Screen = styled.img`
    height: 35em;
    transform: translate(0, 0);
`


export default function ScreenshotBox(props){
        return(
            <ScreenHolder>
                <Screen src={screen} alt=""/>
            </ScreenHolder>
        );

}
