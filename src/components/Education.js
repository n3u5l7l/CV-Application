import React from "react";
import {ReactComponent as EducationLogo} from "../assets/school.svg";

class Education extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="education">
                <div className="education-header">
                    <EducationLogo alt="education" width="35" height="35" />
                    <h3>Education</h3>
                </div>
            </div>
        )
    }
}

export default Education;