import React from "react";
import "../styles/name.css";

export default class Name extends React.Component {
  changeName = (e) => {
    this.props.nameChange(e.target.value);
  };

  next = () => {
    this.props.history.push("/age");
  };

  back = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="name-div">
        <header>
          <span onClick={this.back}>&#8592;</span>
          <h1 className="landing-title">Elevate</h1>
        </header>
        <h2>What can we call you?</h2>
        <label htmlFor="name">
          <h3>{this.props.name ? this.props.name : "Enter Name"}</h3>

          <input
            id="name"
            name="name"
            className="name-text"
            type="text"
            onChange={this.changeName}
          />
        </label>
        <button
          className="done"
          disabled={!this.props.name}
          onClick={this.next}
        >
          Done!
        </button>
      </div>
    );
  }
}
