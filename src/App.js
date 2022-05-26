import React, {Component} from "react";
import ReactToPrint from "react-to-print";
import ComponentToPrint from "./components/ComponentToPrint";
import {ReactComponent as PrintLogo} from "./assets/printer.svg";

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
    let displayContent = null;
  
    /* if(this.state.previewMode === "ON"){
      //printButton = <div className="print" onClick={(e) => {window.print()}}><PrintLogo/></div>
      displayContent = (
        <div className="previewContent">
          <ReactToPrint trigger={ () => {
            return <PrintLogo className="print"/>;
          }}
          content = {() => this.componentRef}
          />
          <ComponentToPrint previewMode = {this.state.previewMode} ref={el => (this.componentRef = el)} />
        </div>
      )
    }else{
      displayContent = <ComponentToPrint previewMode = {this.state.previewMode}/>
    } */
    return (
    <div className="App">
      <div className="title">
        <h1>CV-Application</h1>
        <button className="previewMode" style = {this.state.previewStyle} onClick={this.handleClick}>
          Preview {this.state.previewMode}
        </button>
      </div>
      {/* {displayContent} */}
      {this.state.previewMode === "ON" ? (<ReactToPrint trigger={ () => {
            return <PrintLogo className="print"/>;
          }}
          content = {() => this.componentRef}
          /> ): null}
      <ComponentToPrint previewMode = {this.state.previewMode} ref={el => (this.componentRef = el)} />
    </div>
    );
  }
}

export default App;
