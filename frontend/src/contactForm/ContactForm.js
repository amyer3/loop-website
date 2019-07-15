import React from 'react';
import "./ContactForm.css";
require('whatwg-fetch');

//https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}:append


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
var send_mail = () => {
    console.log('sending')
    var id = `${process.env.REACT_APP_SHEETS_ID}`;
    var key = `${process.env.REACT_APP_SHEETS_API_KEY}`;
    var date = Date.now();
    var name = 'test';
    var email = 'test';
    var subject = 'test';
    var message = 'test';
    var link = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/Sheet1!A1%3AE1:append?includeValuesInResponse=false&insertDataOption=INSERT_ROWS&responseDateTimeRenderOption=FORMATTED_STRING&responseValueRenderOption=UNFORMATTED_VALUE&valueInputOption=RAW&key=${key}`;


    fetch(link, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: {

            "majorDimension": "ROWS",
            "values": [
                [
                    date,
                    name,
                    email,
                    subject,
                    message
                ]
            ],
            "range": "Sheet1!A1:E1"
        }
    });
    console.log(date)
};

class ContactForm extends React.Component {




    render() {
        return (
            <div id={this.props.id} className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <form id="contactForm">
                    <input name="name" placeholder='Name'/>
                    <input name="email" placeholder='Email'/>
                    <input name="subject" placeholder='Subject'/>
                    <input name="message" placeholder='Message'/>
                </form>
                <div id="send_button"><a onClick={send_mail}><b>Send!</b></a></div>
            </div>


        );
    }
}

export default ContactForm