import React, {Component} from "react";
import Info from "./components/Info";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skill from "./components/Skill";

class App extends Component{
  constructor(){
    super();
  }

  render(){
    return (
    <div className="App">
      <div className="title">
        <h1>CV-Application</h1>
        <div className="previewMode">
          on off
        </div>
      </div>
      <div className="AppContent">
        <Info />
        <Experience />
        <Education />
        <Skill />
      </div>
    </div>
    );
  }
}

export default App;
