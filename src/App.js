import React, {Component} from "react";
import Info from "./components/Info";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skill from "./components/Skill";

class App extends Component{
  constructor(){
    super();

    this.state = {
      previewMode: "OFF",
      previewStyle: {
        background: "",
        opacity:"",
      }
    }
  }

  handleClick = (e) => {
    const previewOff = this.state.previewMode === "OFF" ? true: false;

    this.setState({
      previewMode: previewOff ? "ON": "OFF",
      previewStyle: previewOff ? {background: "green", opacity: "1"} : {background: "", opacity: ""} 
    });

  }
  render(){
    return (
    <div className="App">
      <div className="title">
        <h1>CV-Application</h1>
        <button className="previewMode" style = {this.state.previewStyle} onClick={this.handleClick}>
          Preview {this.state.previewMode}
        </button>
      </div>
      <div className="AppContent">
        <Info previewMode = {this.state.previewMode}/>
        <Experience previewMode = {this.state.previewMode}/>
        <Education previewMode = {this.state.previewMode}/>
        <Skill previewMode = {this.state.previewMode}/>
      </div>
    </div>
    );
  }
}

export default App;
