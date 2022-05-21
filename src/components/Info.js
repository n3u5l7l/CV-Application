import React from "react";
import "../styles/info.css";
class Info extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return (
            <div className="info">
                <h2>First Name</h2>
                <h2>Last Name</h2>
            </div>
        )
    }
}

export default Info;