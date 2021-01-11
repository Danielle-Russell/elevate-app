import React from "react";
import "../styles/goals.css";

export default class Goals extends React.Component {
  state = {
    arr: [
      { name: "Lose Weight", isActive: false },
      { name: "Tone Up", isActive: false },
      { name: "Improve Fitness", isActive: false },
    ],
  };

  next = () => {
    let goals = this.state.arr.filter((goal) => goal.isActive);
    this.props.setGoals(goals);
    this.props.history.push("/time");
  };

  onClick(index) {
    let tmp = this.state.arr;
    tmp[index].isActive = !tmp[index].isActive;
    this.setState({ arr: tmp });
  }

  back = () => {
    this.props.history.goBack();
  };

  active = () => {
    let goals = this.state.arr.filter((goal) => goal.isActive);
    if (goals.length > 1 || goals.length < 1) {
      return true;
    }
  };

  render() {
    return (
      <div>
        <header>
          <span onClick={this.back}>&#8592;</span> Elevate
        </header>
        <h1>Goals</h1>
        <div>
          {this.state.arr.map((el, index) => (
            <div
              className={el.isActive ? "active" : "inactive"}
              key={index}
              onClick={() => this.onClick(index)}
            >
              {el.name}
            </div>
          ))}
        </div>
        {this.active() ? (
          <span className="warning">Please select 1</span>
        ) : null}
        <button onClick={this.next} disabled={this.active()} className="done">
          Done
        </button>
      </div>
    );
  }
}
