import React from "react";
import {ReactComponent as EducationLogo} from "../assets/school.svg";
import uniqid from "uniqid";
import EducationOverview from "./EducationOverview";
import EducationOverviewDesc from "./EducationOverViewDesc";

class Education extends React.Component{
    constructor(){
        super();

        this.state = {
            addingMode: false,
            newInfo: {
                university: "",
                degree: "",
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

    
    render(){
        const addingMode = this.state.addingMode;
        let whatState;

        if(addingMode){
            whatState = <AddingState tempInfo = {this.state.newInfo} descriptions = {this.state.newInfo.descriptions} handleSubmission = {this.onSubmission} handleCompanyChange = {this.handleCompanyChange} handleRoleChange = {this.handleRoleChange} handleLocationChange = {this.handleLocationChange} handleDateFromChange = {this.handleDateFromChange} handleDateToChange = {this.handleDateToChange} handleDescriptionChange = {this.handleDescriptionChange} handleAdd={this.addDescriptions}/>;
        }else{
            whatState = <DefaultState handleClick={this.addNewExperience}/>;
        }

        return (
            <div className="education">
                <div className="education-header">
                    <EducationLogo alt="education" width="35" height="35" />
                    <h3>Education</h3>
                </div>
                <EducationOverview allInfo = {this.state.Infos}/>
                {whatState}
            </div>
        )
    }
}

function DefaultState(props){
    return (
        <div className="education-default-state">
            <button onClick={props.handleClick}>+ Education</button>
        </div>
    )
}

function AddingState(props){
    return(
        <form className="educationForm" method="post" onSubmit={props.handleSubmission}>
            <div>
                <label htmlFor="university">University</label>
                <input type="text" id="university" name="university" value={props.tempInfo.company} onChange={props.handleCompanyChange}></input>
            </div>
            <div>
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" name="degree" value={props.tempInfo.role} onChange = {props.handleRoleChange}></input>
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
                <label htmlFor="description">Noteable description/achievements</label>
                <EducationOverviewDesc descriptions = {props.descriptions}/>
                <textarea value={props.tempInfo.newDesc.info} id="description" name="description" onChange={props.handleDescriptionChange} onKeyDown={props.handleAdd}></textarea>
            </div>
            <button>Add</button>
            <button>Cancel</button>
        </form>
    );
}

export default Education;