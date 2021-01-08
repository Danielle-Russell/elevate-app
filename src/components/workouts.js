import React from "react";
import moment from "moment";
import "../styles/workouts.css";
import Modal from "./modal.js";
import SecondModal from "./secondModal.js";
import workouts from "./dummyData";
import config from "../config";

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
      let pref = this.props.state.preferences.goals;
      if (this.state.dayOne) {
        return pref === "Lose Weight"
          ? workouts.weight.dayOne[0]
          : pref === "Tone  Up"
          ? workouts.tone.dayOne[0]
          : pref === "Improve Fitness"
          ? workouts.fitness.dayOne[0]
          : workouts.weight.dayOne[0];
      }
      if (this.state.dayTwo) {
        return pref === "Lose Weight"
          ? workouts.weight.dayTwo[0]
          : pref === "Tone Up"
          ? workouts.tone.dayTwo[0]
          : pref === "Improve Fitness"
          ? workouts.fitness.dayTwo[0]
          : workouts.weight.dayTwo[0];
      }
      if (this.state.dayThree) {
        return pref === "Lose Weight"
          ? workouts.weight.dayThree[0]
          : pref === "Tone Up"
          ? workouts.tone.dayThree[0]
          : pref === "Improve Fitness"
          ? workouts.fitness.dayThree[0]
          : workouts.weight.dayThree[0];
      }
      if (this.state.dayFour) {
        return pref === "Lose Weight"
          ? workouts.weight.dayFour[0]
          : pref === "Tone Up"
          ? workouts.tone.dayFour[0]
          : pref === "Improve Fitness"
          ? workouts.fitness.dayFour[0]
          : workouts.weight.dayFour[0];
      }
    };

    const determineSecond = () => {
      let pref = this.props.state.preferences.goals;

      if (this.state.dayOne) {
        return pref === "Lose Weight"
          ? workouts.weight.dayOne[1]
          : pref === "Tone Up"
          ? workouts.tone.dayOne[1]
          : pref === "Improve Fitness"
          ? workouts.fitness.dayOne[1]
          : workouts.weight.dayOne[1];
      }
      if (this.state.dayTwo) {
        return pref === "Lose Weight"
          ? workouts.weight.dayTwo[1]
          : pref === "Tone Up"
          ? workouts.tone.dayTwo[1]
          : pref === "Improve Fitness"
          ? workouts.fitness.dayTwo[1]
          : workouts.weight.dayTwo[1];
      }
      if (this.state.dayThree) {
        return pref === "Lose Weight"
          ? workouts.weight.dayThree[1]
          : pref === "Tone Up"
          ? workouts.tone.dayThree[1]
          : pref === "Improve Fitness"
          ? workouts.fitness.dayThree[1]
          : workouts.weight.dayThree[1];
      }
      if (this.state.dayFour) {
        return pref === "Lose Weight"
          ? workouts.weight.dayOne[1]
          : pref === "Tone Up"
          ? workouts.tone.dayOne[1]
          : pref === "Improve Fitness"
          ? workouts.fitness.dayOne[1]
          : workouts.weight.dayOne[1];
      }
    };

    const markAsComplete = (name) => {
      this.setState({
        completed: [...this.state.completed, name],
      });
    };

    const days = this.props.state.preferences.days.split(",");

    const time = this.props.state.preferences.time.split(",")

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
        <h1>Welcome, </h1>
        <h2>Beginners Challenge Week</h2>

        <div className="date">
          {/*this.props.state.workoutArray.map((workout) => (
            <div>
              <span>&#8592;</span> {workout.title}
              <span> &#8594; </span>
            </div>
          ))*/}
          {this.state.dayOne ? (
            <div>
              <span>&#8592;</span>
              {days[0]}
              <span onClick={this.dayTwo}> &#8594; </span>
            </div>
          ) : this.state.dayTwo ? (
            <div>
              <span onClick={this.dayOne}>&#8592;</span>
              {days[1]}

              <span onClick={this.dayThree}> &#8594; </span>
            </div>
          ) : this.state.dayThree ? (
            <div>
              <span onClick={this.dayTwo}>&#8592;</span>
              {days[2]}

              <span onClick={this.dayFour}> &#8594; </span>
            </div>
          ) : this.state.dayFour ? (
            <div>
              <span onClick={this.dayThree}>&#8592;</span>
              {days[3]}

              <span> &#8594; </span>
            </div>
          ) : null}
        </div>
        <div className="date" onClick={this.showModal}>
          {determineFirst().name}
          <br />
          {time[0]}
        </div>
        <div className="date" onClick={this.showSecondModal}>
        {determineSecond().name}

          <br />
          {time[1]}
        </div>
      </div>
    );
  }
}
