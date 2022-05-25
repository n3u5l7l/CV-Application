import React from "react";
import {ReactComponent as ExperienceLogo} from "../assets/briefcase-outline.svg";
import ExperienceOverview from "./ExperienceOverview"; 
import ExperienceOverviewDesc from "./ExperienceOverviewDesc";
import uniqid from "uniqid";

class Experience extends React.Component{
    constructor(){
        super();

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

    addDescriptions = (e) =>{
        if(e.keyCode !== 13){return;}
        e.preventDefault();
        
        this.setState({
            newInfo: {
                ...this.state.newInfo,
                descriptions: this.state.newInfo.descriptions.concat(this.state.newInfo.newDesc),
                newDesc: {
                    info:  "",
                    id: uniqid(),
                },
                /* company: this.state.newInfo.company,
                role: this.state.newInfo.role,
                state: this.state.newInfo.state,
                dateFrom: this.state.newInfo.dateFrom,
                dateTo: this.state.newInfo.dateTo,
                descriptions: this.state.newInfo.descriptions.concat(this.state.newInfo.newDesc),
                newDesc: {
                    info:  "",
                    id: uniqid(),
                },
                infoID: this.state.newInfo.infoID, */
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
                /* company: this.state.newInfo.company,
                role: this.state.newInfo.role,
                state: this.state.newInfo.state,
                dateFrom: this.state.newInfo.dateFrom,
                dateTo: this.state.newInfo.dateTo,
                descriptions: this.state.newInfo.descriptions,
                newDesc: {
                    info:  e.target.value,
                    id: this.state.newInfo.newDesc.id,
                },
                infoID: this.state.newInfo.infoID, */
            }
        });
    }
    handleCompanyChange = (e) => {
        this.setState({
            newInfo: {
                ...this.state.newInfo,
                company: e.target.value,
         /*        company: e.target.value,
                role: this.state.newInfo.role,
                state: this.state.newInfo.state,
                dateFrom: this.state.newInfo.dateFrom,
                dateTo: this.state.newInfo.dateTo,
                descriptions: this.state.newInfo.descriptions,
                newDesc: {
                    info:  this.state.newInfo.newDesc.info,
                    id: this.state.newInfo.newDesc.id,
                },
                infoID: this.state.newInfo.infoID, */
            }
        });
    }
    handleRoleChange = (e) => {
        this.setState({
            newInfo: {
                ...this.state.newInfo,
                role: e.target.value,
                /* company: this.state.newInfo.company,
                role: e.target.value,
                state: this.state.newInfo.state,
                dateFrom: this.state.newInfo.dateFrom,
                dateTo: this.state.newInfo.dateTo,
                descriptions: this.state.newInfo.descriptions,
                newDesc: {
                    info:  this.state.newInfo.newDesc.info,
                    id: this.state.newInfo.newDesc.id,
                },
                infoID: this.state.newInfo.infoID, */
            }
        });
    }
    handleLocationChange = (e) => {
        this.setState({
            newInfo: {
                ...this.state.newInfo,
                state: e.target.value,
        /*         company: this.state.newInfo.company,
                role: this.state.newInfo.role,
                state: e.target.value,
                dateFrom: this.state.newInfo.dateFrom,
                dateTo: this.state.newInfo.dateTo,
                descriptions: this.state.newInfo.descriptions,
                newDesc: {
                    info:  this.state.newInfo.newDesc.info,
                    id: this.state.newInfo.newDesc.id,
                },
                infoID: this.state.newInfo.infoID, */
            }
        });
    }

    handleDateFromChange = (e) => {
        this.setState({
            newInfo: {
                ...this.state.newInfo,
                dateFrom: e.target.value,
                /* company: this.state.newInfo.company,
                role: this.state.newInfo.role,
                state: this.state.newInfo.state,
                dateFrom: e.target.value,
                dateTo: this.state.newInfo.dateTo,
                descriptions: this.state.newInfo.descriptions,
                newDesc: {
                    info:  this.state.newInfo.newDesc.info,
                    id: this.state.newInfo.newDesc.id,
                },
                infoID: this.state.newInfo.infoID, */
            }
        })
    }
    handleDateToChange = (e) => {
        this.setState({
            newInfo: {
                ...this.state.newInfo,
                dateTo: e.target.value,
              /*   company: this.state.newInfo.company,
                role: this.state.newInfo.role,
                state: this.state.newInfo.state,
                dateFrom: this.state.newInfo.dateFrom,
                dateTo: e.target.value,
                descriptions: this.state.newInfo.descriptions,
                newDesc: {
                    info:  this.state.newInfo.newDesc.info,
                    id: this.state.newInfo.newDesc.id,
                },
                infoID: this.state.newInfo.infoID, */
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

        if(addingMode){
            whatState = <AddingState tempInfo = {this.state.newInfo} descriptions = {this.state.newInfo.descriptions} handleSubmission = {this.onSubmission} handleCompanyChange = {this.handleCompanyChange} handleRoleChange = {this.handleRoleChange} handleLocationChange = {this.handleLocationChange} handleDateFromChange = {this.handleDateFromChange} handleDateToChange = {this.handleDateToChange} handleDescriptionChange = {this.handleDescriptionChange} handleAdd={this.addDescriptions}/>;
        }else{
            whatState = <DefaultState handleClick={this.addNewExperience}/>;
        }
        return (
            <div className="experience">
                <div className="experience-header">
                    <ExperienceLogo alt="experience" width="35" height="35"/>
                    <h3>Experience</h3>
                </div>
                <ExperienceOverview allInfo = {this.state.Infos} handleRemove={this.deleteInfo}/>
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
                <input type="text" id="company" value={props.tempInfo.company} onChange={props.handleCompanyChange} name="company"></input>
            </div>
            <div>
                <label htmlFor="role">Role</label>
                <input type="text" value={props.tempInfo.role} onChange = {props.handleRoleChange} id="role" name="role"></input>
            </div>
            <div className="stateField">
                <label htmlFor="state">State</label>
                <input type="text" id="state" value={props.tempInfo.state} onChange = {props.handleLocationChange} name="state"></input>
            </div>
            <div>
                <label htmlFor="dateFrom">From</label>
                <input type="text" id="dateFrom" value={props.tempInfo.dateFrom} onChange={props.handleDateFromChange} name="dateFrom" placeholder="YYYY-MM"></input>
            </div>
            <div>
                <label htmlFor="dateTo">To</label>
                <input type="text" id="dateTo" value={props.tempInfo.dateTo} onChange={props.handleDateToChange} name="dateTo" placeholder="YYYY-MM or Present"></input>
            </div>
            <div className="descriptionField">
                <label htmlFor="description">Noteable description/achievements/experience</label>
                <ExperienceOverviewDesc descriptions = {props.descriptions}/>
                <textarea value={props.tempInfo.newDesc.info} id="description" name="description" onChange={props.handleDescriptionChange} onKeyDown={props.handleAdd}></textarea>
            </div>
            <button>Add</button>
            <button>Cancel</button>
        </form>
    );
}
export default Experience;