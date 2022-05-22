import React from "react";
import {ReactComponent as ExperienceLogo} from "../assets/briefcase-outline.svg";
class Experience extends React.Component{
    constructor(){
        super();

        this.state = {

        }
    }

    render(){

        return (
            <div className="experience">
                <div className="experience-header">
                    <ExperienceLogo alt="experience" width="35" height="35"/>
                    <h3>Experience</h3>
                </div>
                <button>+ Work Experience</button>
            </div>
        )
    }
}

export default Experience;