import React from "react";
import {ReactComponent as ExperienceLogo} from "../assets/briefcase-outline.svg";
import ExperienceOverview from "./ExperienceOverview"; 
import ExperienceOverviewDesc from "./ExperienceOverviewDesc";
import uniqid from "uniqid";

class Experience extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            addingMode: false,
            newInfo: {
                company: "",
                role: "",
                state: "",
                dateFrom: "",
                dateTo: "",
                descriptions: [],
                newDesc: {
                    info: "",
                    id: uniqid(),
                },
                infoID: uniqid(),
            },
            Infos: [],
        }
    }

    addNewExperience = (e) =>{
        this.setState({
            addingMode: true,
        })
    }

    stopAddingExperience = (e) => {
        this.setState({
            addingMode: false,
        })
    }

    addDescriptions = (e) =>{
        if(e.keyCode !== 13){return;}  
        if(e.keyCode === 13 &&  !e.target.value){
            e.preventDefault();
            return;
        }
        e.preventDefault();
        this.setState({
            newInfo: {
                ...this.state.newInfo,
                descriptions: this.state.newInfo.descriptions.concat(this.state.newInfo.newDesc),
                newDesc: {
                    info:  "",
                    id: uniqid(),
                },
            }
        })
    }
    handleDescriptionChange = (e) => {
        this.setState({
            newInfo: {
                ...this.state.newInfo,
                newDesc: {
                    info:  e.target.value,
                    id: this.state.newInfo.newDesc.id,
                },
            }
        });
    }
    handleCompanyChange = (e) => {
        this.setState({
            newInfo: {
                ...this.state.newInfo,
                company: e.target.value,
            }
        });
    }
    handleRoleChange = (e) => {
        this.setState({
            newInfo: {
                ...this.state.newInfo,
                role: e.target.value,
            }
        });
    }
    handleLocationChange = (e) => {
        this.setState({
            newInfo: {
                ...this.state.newInfo,
                state: e.target.value,
            }
        });
    }

    handleDateFromChange = (e) => {
        this.setState({
            newInfo: {
                ...this.state.newInfo,
                dateFrom: e.target.value,
            }
        })
    }
    handleDateToChange = (e) => {
        this.setState({
            newInfo: {
                ...this.state.newInfo,
                dateTo: e.target.value,
            }
        });
    }
    onSubmission = (e) => {
        e.preventDefault();
        this.setState({
            addingMode: false,
            Infos: this.state.Infos.concat(this.state.newInfo),
            newInfo: {
                company: "",
                role: "",
                state: "",
                dateFrom: "",
                dateTo: "",
                descriptions: [],
                newDesc: {
                    info: "",
                    id: uniqid(),
                },
                infoID: uniqid(),
            }
        })
    }

    deleteInfo = (e, targetID) => {
        this.setState({
            Infos: this.state.Infos.filter(infos => !(infos.infoID === targetID)),
        })
    }

    render(){
        const addingMode = this.state.addingMode;
        let whatState;
        if(this.props.previewMode === "ON"){
            whatState = null;
        }
        else{
            if(addingMode){
                whatState = <AddingState tempInfo = {this.state.newInfo} descriptions = {this.state.newInfo.descriptions} handleSubmission = {this.onSubmission} handleCompanyChange = {this.handleCompanyChange} handleRoleChange = {this.handleRoleChange} handleLocationChange = {this.handleLocationChange} handleDateFromChange = {this.handleDateFromChange} handleDateToChange = {this.handleDateToChange} handleDescriptionChange = {this.handleDescriptionChange} handleAdd={this.addDescriptions} handleRemove={this.stopAddingExperience}/>;
            }else{
                whatState = <DefaultState handleClick={this.addNewExperience}/>;
            }
        }

        return (
            <div className="experience">
                <div className="experience-header">
                    <ExperienceLogo alt="experience" width="35" height="35"/>
                    <h3>Experience</h3>
                </div>
                <ExperienceOverview previewMode = {this.props.previewMode}  allInfo = {this.state.Infos} handleRemove={this.deleteInfo}/>
                {whatState}
            </div>
        )
    }
}

function DefaultState(props){
    return (
        <div className="experience-default-state">
            <button onClick={props.handleClick}>+ Work Experience</button>
        </div>
    )
}

function AddingState(props){
    return(
        <form className="experienceForm" method="post" onSubmit={props.handleSubmission}>
            <div>
                <label htmlFor="company">Company Name</label>
                <input type="text" id="company" name="company" value={props.tempInfo.company} onChange={props.handleCompanyChange}></input>
            </div>
            <div>
                <label htmlFor="role">Role</label>
                <input type="text" id="role" name="role" value={props.tempInfo.role} onChange = {props.handleRoleChange}></input>
            </div>
            <div className="stateField">
                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" value={props.tempInfo.state} onChange = {props.handleLocationChange}></input>
            </div>
            <div>
                <label htmlFor="dateFrom">From</label>
                <input type="text" id="dateFrom" name="dateFrom" placeholder="YYYY-MM" value={props.tempInfo.dateFrom} onChange={props.handleDateFromChange}></input>
            </div> 
            <div>
                <label htmlFor="dateTo">To</label>
                <input type="text" id="dateTo" name="dateTo" placeholder="YYYY-MM or Present" value={props.tempInfo.dateTo} onChange={props.handleDateToChange}></input>
            </div>
            <div className="descriptionField">
                <label htmlFor="description">Noteable description/achievements/experience</label>
                <ExperienceOverviewDesc descriptions = {props.descriptions}/>
                <textarea value={props.tempInfo.newDesc.info} id="description" name="description" onChange={props.handleDescriptionChange} onKeyDown={props.handleAdd}></textarea>
            </div>
            <button>Add</button>
            <button onClick={props.handleRemove}>Cancel</button>
        </form>
    );
}
export default Experience;