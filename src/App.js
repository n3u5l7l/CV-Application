import React, {Component} from "react";
import Info from "./components/Info";
import Experience from "./components/Experience";
class App extends Component{
  constructor(){
    super();
  }

  render(){
    return (
    <div className="App">
      <Info />
      <Experience />
    </div>
    );
  }
}

export default App;
