import React from "react";
import "../styles/weight.css";

export default class Weight extends React.Component {
  changeSlide = (e) => {
    this.props.setWeight(e.target.value);
  };

  next = () => {
    this.props.history.push("/height");
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
          <h1>Weight</h1>
          <div className="age-range">
            {Number(this.props.weight) === 400
              ? this.props.weight + "+"
              : this.props.weight + "lbs"}{" "}
          </div>
          <input
            id="slider"
            className="slider"
            onChange={this.changeSlide}
            type="range"
            min="1"
            max="400"
          />
        </label>
        <button className="done" onClick={this.next}>
          Done!
        </button>
      </div>
    );
  }
}
