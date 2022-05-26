import React from "react";


class SkillOverview extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const skills = this.props.skills;

        return (<ul>
            {
                skills.map((skill) => <li key={skill.id}>{skill.skill}</li>)
            }
        </ul>)
    }
}

export default SkillOverview;