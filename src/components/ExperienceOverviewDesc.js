import React from "react";

class ExperienceOverviewDesc extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const descriptions = this.props.descriptions;

        return (
            <ul>
                {descriptions.map((desc) => <li key={desc.id}> {desc.info} </li>)}
            </ul>
        )
    }
}

export default ExperienceOverviewDesc;