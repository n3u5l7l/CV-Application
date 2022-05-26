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
                    <h2 contentEditable={this.props.previewMode === "ON" ? "false": "true"}>{this.state.firstName}</h2>
                    <h2 contentEditable={this.props.previewMode === "ON" ? "false": "true"}>{this.state.lastName}</h2>
                </div>
                <h3 className="role" contentEditable={this.props.previewMode === "ON" ? "false": "true"}>{this.state.currRole}</h3>
                <div className="contacts">
                    <div className="phone-section">
                        <PhoneLogo alt="phone"/>
                        <div className="phoneNumber" contentEditable={this.props.previewMode === "ON" ? "false": "true"}>{this.state.phoneNum}</div>
                    </div>
                    <div className="linkedIn-section">
                        <LinkedInLogo alt="linkedin"/>
                        <div className="linkedIn" contentEditable={this.props.previewMode === "ON" ? "false": "true"}>{this.state.linkedIn}</div>
                    </div>
                    <div className="email-section">
                        <EmailLogo alt="email" />
                        <div className="email" contentEditable={this.props.previewMode === "ON" ? "false": "true"}>{this.state.email}</div>
                    </div>
                    <div className="twitter-section">
                        <TwitterLogo alt="twitter" />
                        <div className="twitter" contentEditable={this.props.previewMode === "ON" ? "false": "true"}>{this.state.twitter}</div>
                    </div>
                </div>
                <div className="aboutMe" contentEditable={this.props.previewMode === "ON" ? "false": "true"}>
                    {this.state.description}
                </div>
            </div>
        )
    }
}

export default Info;