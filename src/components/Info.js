import React from "react";
import {ReactComponent as PhoneLogo} from "../assets/phone.svg";
import {ReactComponent as LinkedInLogo} from "../assets/linkedin.svg";
import {ReactComponent as EmailLogo} from "../assets/email.svg";
import {ReactComponent as TwitterLogo} from "../assets/twitter.svg";

class Info extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return (
            <div className="info">
                <div className="name">
                    <h2>First Name</h2>
                    <h2>Second Name</h2>
                </div>
                <h3 className="role">current role</h3>
                <div className="contacts">
                    <div className="phone-section">
                        <PhoneLogo alt="phone"/>
                        <div className="phoneNumber">xxx-xxx-xxx</div>
                    </div>
                    <div className="linkedIn-section">
                        <LinkedInLogo alt="linkedin"/>
                        <div className="linkedIn">linkedin.com/example</div>
                    </div>
                    <div className="email-section">
                        <EmailLogo alt="email" />
                        <div className="email">example@gmail.com</div>
                    </div>
                    <div className="twitter-section">
                        <TwitterLogo alt="twitter" />
                        <div className="twitter">@example</div>
                    </div>
                </div>
                <div className="description">
                    Tell me about yourself
                </div>
            </div>
        )
    }
}

export default Info;