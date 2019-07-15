import React from 'react'
import "./promoPopIn.css"
import strings from "../assets/strings/strings"



class promoPopIn extends React.Component {
    render(){
        return(
          <div className= 'case'>
                  <div className = 'title'>
                      {strings.promoTitle}
                  </div>
                  <div className = 'loc'>
                      <p className = 'date'>{strings.promoDate}</p>
                      <p className = 'loc'>{strings.promoLocation}</p>
                  </div>
                  <div className = 'mainText'>{strings.promoMainText}</div>

                  <form className='form'>
                      <input className = 'email' placeholder="Email Address"/>
                      <input className="submit" type='submit' value='Keep in touch' />
                  </form>



          </div>
        );
    }
}

export default promoPopIn