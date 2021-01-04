import React from "react";
import "../styles/height.css";

export default  class Height extends React.Component{

  convertedCentoFeet = () => {
    var realFeet = (this.props.height * 0.3937) / 12;
    var feet = Math.floor(realFeet);
    var inches = Math.round((realFeet - feet) * 12);
    return feet + "'" + inches + "''";
  };

  setHeight = (e) => {
    this.props.setHeight(parseFloat(e.target.value))
  }

  next = () => {
    this.props.history.push("/goals");
  }

  back = () => {
    this.props.history.goBack();
  }


  render() {
  return (
    <div>
      <header> <span onClick={this.back}>&#8592;</span> Elevate </header>
      <h1>Height</h1>
      <div className="age-range">{this.convertedCentoFeet()} </div>
        <input
          className="slider"
          onChange={this.setHeight}
          type="range"
          min="50"
          max="250"
        />
      <button className="done" onClick={this.next}>
        Done!
      </button>
    </div>
  );
}
}
