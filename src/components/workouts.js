import React from "react";
import moment from "moment";
import "../styles/workouts.css";
import Modal from "./modal.js";
import SecondModal from "./secondModal.js";
import workouts from "./dummyData";

export default class Workouts extends React.Component {
  state = {
    showFirst: false,
    showSecond: false,
    dayOne: true,
    dayTwo: false,
    dayThree: false,
    dayFour: false,
    completed: [],
  };

  showModal = () => {
    this.setState({
      showFirst: true,
    });
  };

  closeModal = () => {
    this.setState({
      showFirst: false,
    });
  };

  showSecondModal = () => {
    this.setState({
      showSecond: true,
    });
  };

  closeSecondModal = () => {
    this.setState({
      showSecond: false,
    });
  };

  goalsArray = () => {
    for (let i = 0; i < this.props.state.goals.length; i++) {
      return this.props.state.goals[i][0].name;
    }
  };

  timeArrayOne = () => {
    for (let i = 0; i < this.props.state.time.length; i++) {
      return this.props.state.time[i][0].name;
    }
  };

  timeArrayTwo = () => {
    for (let i = 0; i < this.props.state.time.length; i++) {
      return this.props.state.time[i][1].name;
    }
  };

  dayOne = () => {
    this.setState({
      dayOne: true,
      dayTwo: false,
      dayThree: false,
      dayFour: false,
    });
  };
  dayTwo = () => {
    this.setState({
      dayOne: false,
      dayTwo: true,
      dayThree: false,
      dayFour: false,
    });
  };

  dayThree = () => {
    this.setState({
      dayOne: false,
      dayTwo: false,
      dayThree: true,
      dayFour: false,
    });
  };

  dayFour = () => {
    this.setState({
      dayOne: false,
      dayTwo: false,
      dayThree: false,
      dayFour: true,
    });
  };

  render() {
    const determineFirst = () => {
      if (this.state.dayOne) {
        return this.goalsArray() === "Lose Weight"
          ? workouts.weight.dayOne[0]
          : this.goalsArray() === "Tone Up"
          ? workouts.tone.dayOne[0]
          : this.goalsArray() === "Improve Fitness"
          ? workouts.fitness.dayOne[0]
          : null;
      }
      if (this.state.dayTwo) {
        return this.goalsArray() === "Lose Weight"
          ? workouts.weight.dayTwo[0]
          : this.goalsArray() === "Tone Up"
          ? workouts.tone.dayTwo[0]
          : this.goalsArray() === "Improve Fitness"
          ? workouts.fitness.dayTwo[0]
          : null;
      }
      if (this.state.dayThree) {
        return this.goalsArray() === "Lose Weight"
          ? workouts.weight.dayThree[0]
          : this.goalsArray() === "Tone Up"
          ? workouts.tone.dayThree[0]
          : this.goalsArray() === "Improve Fitness"
          ? workouts.fitness.dayThree[0]
          : null;
      }
      if (this.state.dayFour) {
        return this.goalsArray() === "Lose Weight"
          ? workouts.weight.dayFour[0]
          : this.goalsArray() === "Tone Up"
          ? workouts.tone.dayFour[0]
          : this.goalsArray() === "Improve Fitness"
          ? workouts.fitness.dayFour[0]
          : null;
      }
    };

    const determineSecond = () => {
      if (this.state.dayOne) {
        return this.goalsArray() === "Lose Weight"
          ? workouts.weight.dayOne[1]
          : this.goalsArray() === "Tone Up"
          ? workouts.tone.dayOne[1]
          : this.goalsArray() === "Improve Fitness"
          ? workouts.fitness.dayOne[1]
          : null;
      }
      if (this.state.dayTwo) {
        return this.goalsArray() === "Lose Weight"
          ? workouts.weight.dayTwo[1]
          : this.goalsArray() === "Tone Up"
          ? workouts.tone.dayTwo[1]
          : this.goalsArray() === "Improve Fitness"
          ? workouts.fitness.dayTwo[1]
          : null;
      }
      if (this.state.dayThree) {
        return this.goalsArray() === "Lose Weight"
          ? workouts.weight.dayThree[1]
          : this.goalsArray() === "Tone Up"
          ? workouts.tone.dayThree[1]
          : this.goalsArray() === "Improve Fitness"
          ? workouts.fitness.dayThree[1]
          : null;
      }
      if (this.state.dayFour) {
        return this.goalsArray() === "Lose Weight"
          ? workouts.weight.dayOne[1]
          : this.goalsArray() === "Tone Up"
          ? workouts.tone.dayOne[1]
          : this.goalsArray() === "Improve Fitness"
          ? workouts.fitness.dayOne[1]
          : null;
      }
    };

    const markAsComplete = (name) => {
      this.setState({
        completed: [...this.state.completed, name],
      });
    };

    return (
      <div>
        <header>Elevate</header>
        {this.state.showFirst ? (
          <Modal
            closeModal={this.closeModal}
            determineFirst={determineFirst}
            markAsComplete={markAsComplete}
          />
        ) : null}
        {this.state.showSecond ? (
          <SecondModal
            closeSecondModal={this.closeSecondModal}
            determineSecond={determineSecond}
            markAsComplete={markAsComplete}
          />
        ) : null}
        <h1>Week One</h1>

        <div className="date">
          {this.state.dayOne ? (
            <div>
              <span>&#8592;</span> {this.props.state.days[0][0].name}
              <span onClick={this.dayTwo}> &#8594; </span>
            </div>
          ) : this.state.dayTwo ? (
            <div>
              <span onClick={this.dayOne}>&#8592;</span>{" "}
              {this.props.state.days[0][1].name}
              <span onClick={this.dayThree}> &#8594; </span>
            </div>
          ) : this.state.dayThree ? (
            <div>
              <span onClick={this.dayTwo}>&#8592;</span>
              {this.props.state.days[0][2].name}
              <span onClick={this.dayFour}> &#8594; </span>
            </div>
          ) : this.state.dayFour ? (
            <div>
              <span onClick={this.dayThree}>&#8592;</span>{" "}
              {this.props.state.days[0][3].name}
              <span> &#8594; </span>
            </div>
          ) : null}
        </div>
        <div className="date" onClick={this.showModal}>
          {determineFirst().name}
          <br />
          {this.timeArrayOne()}
        </div>
        <div className="date" onClick={this.showSecondModal}>
          {determineSecond().name}
          <br />
          {this.timeArrayTwo()}
        </div>
        {this.state.completed.length >= 2
          ? "You Completed A Day! Well Done!"
          : null}
      </div>
    );
  }
}
