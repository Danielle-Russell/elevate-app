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
    this.props.history.push("/");
  };

  onClick(index) {
    let tmp = this.state.timeArr;
    tmp[index].isActive = !tmp[index].isActive;
    this.setState({ timeArr: tmp });
  }

  back = () => {
    this.props.history.goBack();
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
        <button onClick={this.next} className="done">
          Done
        </button>
      </div>
    );
  }
}
