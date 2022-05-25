import React from "react";
import ExperienceOverviewDesc from "./ExperienceOverviewDesc";
import {ReactComponent as TrashLogo} from "../assets/trash-can.svg";
class ExperienceOverview extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const allInfo = this.props.allInfo;
        return (
         <div className="experience-info-container">
                {allInfo.map((infos) => {
                    return (
                        <div className="experience-info" key={infos.infoID}>
                            <h5 className="date">{infos.dateFrom} - {infos.dateTo}</h5>
                            <strong className="role">{infos.role}</strong>
                            <em className="stateRole">
                                <div className="company">{infos.company},</div>
                                <div className="state">{infos.state}</div>
                            </em>
                            <ExperienceOverviewDesc descriptions = {infos.descriptions} />
                            <TrashLogo alt="trash" onClick={ (e) => {this.props.handleRemove(e, infos.infoID)}}/>
                            {/* <img src="" alt="del" onClick={ (e) => {this.props.handleRemove(e, infos.infoID)}}></img> */}
                        </div>
                    )
                })}
        </div>
        )
    }
}

export default ExperienceOverview;