import React from "react";
import EducationOverviewDesc from "./EducationOverViewDesc";
import {ReactComponent as TrashLogo} from "../assets/trash-can.svg";
class EducationOverview extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const allInfo = this.props.allInfo;
        const previewMode = this.props.previewMode;
        return (
         <div className="education-info-container">
                {allInfo.map((infos) => {
                    return (
                        <div className="education-info" key={infos.infoID}>
                            <h5 className="date">{infos.dateFrom} - {infos.dateTo}</h5>
                            <strong className="role">{infos.degree}, {infos.university}</strong>
                            <EducationOverviewDesc descriptions = {infos.descriptions} />
                            {previewMode !== "ON" ? <TrashLogo alt="trash" onClick={ (e) => {this.props.handleRemove(e, infos.infoID)}}/> : null}
                        </div>
                    )
                })}
        </div>
        )
    }
}

export default EducationOverview;