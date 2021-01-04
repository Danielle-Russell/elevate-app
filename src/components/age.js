import React from "react";
import "../styles/age.css";

export default class Age extends React.Component {

  setAge = (e) => {
    this.props.setAge(e.target.value)
    this.props.history.push("/weight");
  };

  back = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
      <header> <span onClick={this.back}>&#8592;</span> Elevate </header>
        <h1>Age</h1>
        <div>
          <button className="age-range" onClick={this.setAge} value="18-35">
            18-35
          </button>
          <button className="age-range" onClick={this.setAge} value="36-49">
            36-49
          </button>
          <button className="age-range" onClick={this.setAge} value="50+">
            50+
          </button>
        </div>
      </div>
    );
  }
}