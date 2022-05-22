import React from "react";
import {ReactComponent as ExperienceLogo} from "../assets/briefcase-outline.svg";
class Experience extends React.Component{
    constructor(){
        super();
    }

    render(){

        return (
            <div className="experience">
                <div className="experience-header">
                    <ExperienceLogo alt="experience" width="35" height="35"/>
                    <h3>Experience</h3>
                </div>
            </div>
        )
    }
}

export default Experience;