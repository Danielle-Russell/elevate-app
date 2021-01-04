import React from "react";
import "../styles/name.css";

export default class Name extends React.Component {

  changeName = (e) => {
    this.props.nameChange(e.target.value)
  };

  next = () => {
    this.props.history.push("/age");
  };


  back = () => {
    this.props.history.goBack()
  }


  render() {
    return (
      <div className="name-div">
      <header> <span onClick={this.back}>&#8592;</span> Elevate </header>
        <h1>What can we call you?</h1>
          <p>{this.props.name}</p>
        <input className="name-text" type="text" onChange={this.changeName} />
        <button className="done" disabled={!this.props.name} onClick={this.next}>
          Done!
        </button>
      </div>
    );
  }
}
