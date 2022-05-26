import React from "react";
import {ReactComponent as TrashLogo} from "../assets/trash-can.svg";

class SkillOverview extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const skills = this.props.skills;

        return (<ul>
            {
                skills.map((skill) => <li className="skill-container" key={skill.id}>
                    <h4>{skill.skill}</h4>
                    <TrashLogo alt="trash" onClick={ (e) => {this.props.handleRemove(e, skill.id)}}/>
                </li>)
            }
        </ul>)
    }
}

export default SkillOverview;