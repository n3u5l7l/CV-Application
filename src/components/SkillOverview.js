import React from "react";
import {ReactComponent as TrashLogo} from "../assets/trash-can.svg";

class SkillOverview extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const skills = this.props.skills;
        const previewMode = this.props.previewMode;
        return (<ul>
            {
                skills.map((skill) => <li key={skill.id}>
                    <div className="skill-container">
                        <h4>{skill.skill}</h4>
                        {previewMode !== "ON" ? <TrashLogo alt="trash" onClick={ (e) => {this.props.handleRemove(e, skill.id)}}/> : null}
                    </div>
                </li>)
            }
        </ul>)
    }
}

export default SkillOverview;