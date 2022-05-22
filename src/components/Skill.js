import React from "react";
import {ReactComponent as SkillLogo} from "../assets/puzzle-star.svg";

class Skill extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="skill">
                <div className="skill-header">
                    <SkillLogo alt="skill" width="35" height="35" />
                    <h3>Skill</h3>
                </div>
            </div>
        )
    }
}

export default Skill;