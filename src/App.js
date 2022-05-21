import React, {Component} from "react";
import Info from "./components/Info";
import "./styles/app.css";
class App extends Component{
  constructor(){
    super();
  }

  render(){
    return (
    <div className="App">
      <Info />
    </div>
    );
  }
}

export default App;
