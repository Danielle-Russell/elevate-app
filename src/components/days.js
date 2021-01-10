import React from "react";

export default class Days extends React.Component {
  state = {
    daysArr: [
      { name: "Mon", isActive: false },
      { name: "Tues", isActive: false },
      { name: "Weds", isActive: false },
      { name: "Thurs", isActive: false },
      { name: "Fri", isActive: false },
      { name: "Sat", isActive: false },
      { name: "Sun", isActive: false },
    ],
  };

  next = () => {
    let days = this.state.daysArr.filter((day) => day.isActive);
    this.props.setDays(days);
    this.props.history.push("/summary");
  };

  onClick(index) {
    let tmp = this.state.daysArr;
    tmp[index].isActive = !tmp[index].isActive;
    this.setState({ daysArr: tmp });
  }

  back = () => {
    this.props.history.goBack();
  };

  active = () => {
    let days = this.state.daysArr.filter((day) => day.isActive);
    if (days.length !== 4) {
      return true;
    }
  };

  render() {
    return (
      <div>
        <header>
          <span onClick={this.back}>&#8592;</span> Elevate
        </header>
        <h1>What Days Can You Workout?</h1>
        <div>
          {this.state.daysArr.map((el, index) => (
            <div
              className={el.isActive ? "active" : "inactive"}
              key={index}
              onClick={() => this.onClick(index)}
            >
              {el.name}
            </div>
          ))}
        </div>
        {this.active() ? "Please select 4" : null}
        <button onClick={this.next} disabled={this.active()} className="done">
          Done
        </button>
      </div>
    );
  }
}
