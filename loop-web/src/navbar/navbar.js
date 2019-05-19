import React from 'react';
import mail from "../assets/mail-icon.svg"
import menu from "../assets/menu.svg"
import text from "../assets/strings/strings"



class Navbar extends React.Component {

    render(){
        return(
            <span id = 'nav'>
                <div id = 'menu'><img src={ menu }/></div>
                <div id= 'name'>{text.companyName}</div>
                <a id = 'contactus' href="mailto:sean+website@loopinvesting.com"><img src={ mail }/></a>
            </span>
    );
    }
}






export default Navbar;