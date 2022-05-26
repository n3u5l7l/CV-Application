import React from "react";
import Info from "./Info";
import Experience from "./Experience";
import Education from "./Education";
import Skill from "./Skill";

class ComponentToPrint extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const previewMode = this.props.previewMode;
        return (
        <div className="AppContent">
            <Info previewMode = {previewMode}/>
            <Experience previewMode = {previewMode}/>
            <Education previewMode = {previewMode}/>
            <Skill previewMode = {previewMode}/>
        </div>
        )
    }
}

export default ComponentToPrint;