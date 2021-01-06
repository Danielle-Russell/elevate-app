import React from "react";
import "../styles/summary.css";

export default class Summary extends React.Component {
  array = () => {
    for (let i = 0; i < this.props.state.goals.length; i++) {
      return this.props.state.goals[i][0].name;
    }
  };

  determineIcon = () => {
    if (this.array() === "Tone Up") {
      return <img src="https://img.icons8.com/color/48/000000/pilates.png" />;
    } else if (this.array() === "Lose Weight") {
      return <img src="https://img.icons8.com/dusk/64/000000/scale.png" />;
    } else if (this.array() === "Improve Fitness") {
      return <img src="https://img.icons8.com/cotton/64/000000/like--v3.png" />;
    }
  };

  next = () => {
      this.props.history.push("/workouts")
  }
  render() {
    return (
      <div>
        <div className="goal-con"><h1>Goal </h1><br /> {this.determineIcon()} <br /> <p>{this.array()}</p></div>
        <p>{this.props.state.name}, based on the information you have given us, we
        have determined a personal workout plan that we believe is best suited
        to you. Follow the directions to customize your workout plans. Happy
        working out!</p>
        <button className="done" onClick={this.next}>See Plans</button>
      </div>
    );
  }
}
