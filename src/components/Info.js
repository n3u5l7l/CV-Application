import React from "react";
import {ReactComponent as PhoneLogo} from "../assets/phone.svg";
import {ReactComponent as LinkedInLogo} from "../assets/linkedin.svg";
import {ReactComponent as EmailLogo} from "../assets/email.svg";
import {ReactComponent as TwitterLogo} from "../assets/twitter.svg";

class Info extends React.Component{
    constructor(props){
        super(props);

        this.firstName = "First Name";
        this.lastName = "Last Name";
        this.currRole = "Current Role";
        this.phoneNum = "xxx-xxx-xxxx";
        this.linkedIn ="linkedin.com/example";
        this.email = "example@gmail.com";
        this.twitter = "@example";
        this.description =  "Tell me about yourself";
    }

    render(){

        return (
            <div className="info">
                <div className="name">
                    <h2 contentEditable={this.props.previewMode === "ON" ? "false": "true"}>{this.firstName}</h2>
                    <h2 contentEditable={this.props.previewMode === "ON" ? "false": "true"}>{this.lastName}</h2>
                </div>
                <h3 className="role" contentEditable={this.props.previewMode === "ON" ? "false": "true"}>{this.currRole}</h3>
                <div className="contacts">
                    <div className="phone-section">
                        <PhoneLogo alt="phone"/>
                        <div className="phoneNumber" contentEditable={this.props.previewMode === "ON" ? "false": "true"}>{this.phoneNum}</div>
                    </div>
                    <div className="linkedIn-section">
                        <LinkedInLogo alt="linkedin"/>
                        <div className="linkedIn" contentEditable={this.props.previewMode === "ON" ? "false": "true"}>{this.linkedIn}</div>
                    </div>
                    <div className="email-section">
                        <EmailLogo alt="email" />
                        <div className="email" contentEditable={this.props.previewMode === "ON" ? "false": "true"}>{this.email}</div>
                    </div>
                    <div className="twitter-section">
                        <TwitterLogo alt="twitter" />
                        <div className="twitter" contentEditable={this.props.previewMode === "ON" ? "false": "true"}>{this.twitter}</div>
                    </div>
                </div>
                <div className="aboutMe" contentEditable={this.props.previewMode === "ON" ? "false": "true"}>
                    {this.description}
                </div>
            </div>
        )
    }
}

export default Info;