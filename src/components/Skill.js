import React from "react";
import {ReactComponent as SkillLogo} from "../assets/puzzle-star.svg";
import SkillOverview from "./SkillOverview";
import uniqid from "uniqid";

class Skill extends React.Component{
    constructor(){
        super();

        this.state = {
            addingMode: false,
            newSkill: {
                skill: "",
                id: uniqid(),
            },
            skills: [],
        }
    }

    addNewSkill = (e) => {
        this.setState({
            addingMode: true,
        })
    }
    handleChange = (e) => {
        this.setState({
            newSkill: {
                skill: e.target.value,
                id: this.state.newSkill.id,
            }
        })
    }

    handleRemove = (e, targetID) => {
        this.setState({
            skills: this.state.skills.filter(infos => !(infos.id === targetID)),
        });
    }
    onSubmission = (e) => {
        e.preventDefault();

        this.setState({
            skills: this.state.skills.concat(this.state.newSkill),
            addingMode: false,
            newSkill:{
                skill: "",
                id: uniqid(),
            }
        })
    }

    render(){
        const addingMode = this.state.addingMode;
        let whatState;
        if(this.props.previewMode === "ON"){
            whatState = "";
        }else{
            if(addingMode){
                whatState = <AddingState tempInfo = {this.state.newSkill} handleSubmission = {this.onSubmission} handleChange={this.handleChange}/>;
            }else{
                whatState = <DefaultState handleClick={this.addNewSkill}/>;
            }
        }

        return (
            <div className="skill">
                <div className="skill-header">
                    <SkillLogo alt="skill" width="35" height="35" />
                    <h3>Skill</h3>
                </div>
                <SkillOverview skills={this.state.skills} handleRemove = {this.handleRemove}/>
                {whatState}
            </div>
        )
    }
}

function DefaultState(props){
    return (
        <div className="education-default-state">
            <button onClick={props.handleClick}>+ Skills</button>
        </div>
    )
}

function AddingState(props){
    return(
        <form className="skillForm" method="post" onSubmit={props.handleSubmission}>
            <div className="skill-input-container">
                <label htmlFor="skill">Skill</label>
                <input type="text" id="skill" name="skill" value={props.tempInfo.skill} onChange={props.handleChange}></input>
            </div>
            <button>Add</button>
            <button>Cancel</button>
        </form>
    );
}
export default Skill;