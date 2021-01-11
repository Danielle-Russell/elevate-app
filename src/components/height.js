import React from "react";
import "../styles/height.css";

export default class Height extends React.Component {
  convertedCentoFeet = () => {
    var realFeet = (this.props.height * 0.3937) / 12;
    var feet = Math.floor(realFeet);
    var inches = Math.round((realFeet - feet) * 12);
    return feet + "'" + inches + "''";
  };

  setHeight = (e) => {
    this.props.setHeight(parseFloat(e.target.value));
  };

  calculateBMI = () => {
    let weight = Number(this.props.weight) * 0.45359237;
    let height = this.props.height;
    let calc = weight / Math.pow(height, 2);
    let bmi = calc * 10000;
    return bmi.toFixed(2);
  };

  next = () => {
    this.props.history.push("/goals");
  };

  back = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <header>
          {" "}
          <span onClick={this.back}>&#8592;</span> Elevate{" "}
        </header>
        <label htmlFor="slider">
          <h1>Height</h1>
          <div className="age-range">{this.convertedCentoFeet()} </div>

          <input
            id="slider"
            className="slider"
            onChange={this.setHeight}
            type="range"
            min="50"
            max="250"
          />
        </label>
        {this.calculateBMI() <= 18.5 ? (
          <span className="warning">
            Your BMI is less than 18.5%. We recommend consulting your doctor
            before engaging in regular workouts
          </span>
        ) : null}
        <button className="done" onClick={this.next}>
          Done!
        </button>
      </div>
    );
  }
}
