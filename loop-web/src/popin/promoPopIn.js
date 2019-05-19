import React from 'react'
import "./promoPopIn.css"
import strings from "../assets/strings/strings"



class promoPopIn extends React.Component {
    render(){
        return(
          <div id= 'case'>
              <div id = 'title'>
                  {strings.promoTitle}
              </div>
              <div id = 'loc'>
                  <p id = 'date'>{strings.promoDate}</p>
                  <p id = 'loc'>{strings.promoLocation}</p>
              </div>
              <div id = 'mainText'>{strings.promoMainText}</div>
              <a href="mailto:sean@loopinvesting.com?Subject=Financial%20Justice%20Forum%202019">
                  <button id = 'callToAction'>{strings.callToActionText}</button>
              </a>

          </div>
        );
    }
}

export default promoPopIn