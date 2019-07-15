import React from 'react'
import styled from 'styled-components'

const Foot = styled.div`
    display: block;
    background-color: white;
    padding-top: 1%;
    padding-bottom: 1%;
    color: rgba(0, 0, 0, 0.5);
    width: 90%;
    text-align: right;
    grid-area: HF;
    font-size: 10px;
`
export default function Footer() {
        return (
          <Foot>
            Copyright Loop Investing Technologies, Inc. 2019
          </Foot>
        );
}
