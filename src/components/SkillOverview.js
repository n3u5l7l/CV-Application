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
                skills.map((skill) => <li className="skill-container" key={skill.id}>
                    <h4>{skill.skill}</h4>
                    {previewMode !== "ON" ? <TrashLogo alt="trash" onClick={ (e) => {this.props.handleRemove(e, skill.id)}}/> : null}
                </li>)
            }
        </ul>)
    }
}

export default SkillOverview;