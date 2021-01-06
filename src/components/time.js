import React from "react";
import "../styles/time.css";

export default class Time extends React.Component {
  state = {
    timeArr: [
      { name: "Morning", isActive: false },
      { name: "Noon", isActive: false },
      { name: "Afternoon", isActive: false },
      { name: "Evening", isActive: false },
    ],
  };

  next = () => {
    let time = this.state.timeArr.filter((time) => time.isActive);
    this.props.setTime(time);
    this.props.history.push("/days");
  };

  onClick(index) {
    let tmp = this.state.timeArr;
    tmp[index].isActive = !tmp[index].isActive;
    this.setState({ timeArr: tmp });
  }

  back = () => {
    this.props.history.goBack();
  };

  active = () => {
    let time = this.state.timeArr.filter((time) => time.isActive);
    if (time.length <= 1 || time.length >= 3) {
      return true;
    }
  };

  render() {
    return (
      <div>
        <header>
          <span onClick={this.back}>&#8592;</span> Elevate
        </header>
        <h1>What Time Of Day Do You Feel You Have the Most Energy?</h1>
        <div>
          {this.state.timeArr.map((el, index) => (
            <div
              className={el.isActive ? "active" : "inactive"}
              key={index}
              onClick={() => this.onClick(index)}
            >
              {el.name}
            </div>
          ))}
        </div>
        {this.active() ? "Please select 2" : null}
        <button onClick={this.next} disabled={this.active()} className="done">
          Done
        </button>
      </div>
    );
  }
}
