import React from "react";
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
    myWorkouts: false,
    randomWorkout: false,
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

  addWork = () => {
    this.props.history.push("/add");
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

  change = () => {
    this.setState({
      myWorkouts: true,
    });
  };

  changeBack = () => {
    this.setState({
      myWorkouts: false,
    });
  };
  render() {
    const determineFirst = () => {
      let pref = localStorage.getItem("goal");
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
      let pref = localStorage.getItem("goal");
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

    const day1 = localStorage.getItem("day1");
    const day2 = localStorage.getItem("day2");

    const day3 = localStorage.getItem("day3");

    const day4 = localStorage.getItem("day4");

    const time1 = localStorage.getItem("time1");

    const time2 = localStorage.getItem("time2");

    const name = localStorage.getItem("name");

    const workoutArray = () => {
      let arr = [];
      for (var key in this.props.state.work) {
        arr.push(this.props.state.work[key]);
      }
      return arr;
    };

    var random_index = Math.floor(Math.random() * (workoutArray().length - 3));
    var randomize = workoutArray()[random_index];

    const random = () => {
      this.setState({
        randomWorkout: true,
      });
    };

    const mapWorkouts = workoutArray().map((workouts) =>
      workouts !== "" ? (
        <div className="date" key={workouts.id}>
          <b>{workouts.title}</b> <br /> {workouts.descr} <br />{" "}
          <em>Tip: {workouts.tip}</em>
        </div>
      ) : null
    );

    return (
      <div>
        <header>
          Elevate <span className="text" onClick={this.changeBack}>Workout Plan</span>{" "}
          <span className="text" onClick={this.change}>My Workouts</span>
        </header>
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

        {this.state.myWorkouts ? (
          <div>
            <h1>My Workouts</h1>
            {this.state.randomWorkout ? <h2>{randomize.title}</h2> : null}{" "}
            {mapWorkouts}
            <button className="btn-other" onClick={random}>
              Random Workout
            </button>
          </div>
        ) : (
          <div>
            <h1>Welcome, {name} </h1>
            <h2> Beginners Workout Week </h2>
            <div className="day">
              {this.state.dayOne ? (
                <div>
                  <span>&#8592;</span>
                  {day1}
                  <span onClick={this.dayTwo}> &#8594; </span>
                </div>
              ) : this.state.dayTwo ? (
                <div>
                  <span onClick={this.dayOne}>&#8592;</span>
                  {day2}

                  <span onClick={this.dayThree}> &#8594; </span>
                </div>
              ) : this.state.dayThree ? (
                <div>
                  <span onClick={this.dayTwo}>&#8592;</span>
                  {day3}

                  <span onClick={this.dayFour}> &#8594; </span>
                </div>
              ) : this.state.dayFour ? (
                <div>
                  <span onClick={this.dayThree}>&#8592;</span>
                  {day4}

                  <span> &#8594; </span>
                </div>
              ) : null}
              <div></div>
              <div className="date" onClick={this.showModal}>
                {determineFirst().name}
                <br />
                <em>{time1}</em>
              </div>
              <div className="date" onClick={this.showSecondModal}>
                {determineSecond().name}
                <br />
                <em>{time2}</em>
              </div>
            </div>
          </div>
        )}

        <button className="done" onClick={this.addWork}>
          Add Workout
        </button>
      </div>
    );
  }
}
