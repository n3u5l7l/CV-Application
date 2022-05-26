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
                skills.map((skill) => <li key={skill.id}>
                    <h4>{skill.skill}</h4>

                </li>)
            }
        </ul>)
    }
}

export default SkillOverview;