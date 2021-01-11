import React from "react";
import "../styles/workouts.css";
import Modal from "./modal.js";
import SecondModal from "./secondModal.js";
import workouts from "./dummyData";
import AddWorkout from "./add.js";

export default class Workouts extends React.Component {
  state = {
    showFirst: false,
    showSecond: false,
    dayOne: true,
    dayTwo: false,
    dayThree: false,
    dayFour: false,
    myWorkouts: false,
    randomWorkout: false,
    showAdd: false,
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

  //Navigate through each day of workout plan
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
  //Toggle to my workouts
  change = () => {
    this.setState({
      myWorkouts: true,
      showAdd: false,
    });
  };
  addWork = () => {
    this.setState({
      showAdd: true,
    });
  };
  changeBack = () => {
    this.setState({
      myWorkouts: false,
    });
  };

  signOut = () => {
    this.props.history.push("/");
    localStorage.clear();
  };

  render() {
    //Determine workout based on preferences
    const determineFirst = () => {
      let pref = localStorage.getItem("goal");
      if (this.state.dayOne) {
        return pref === "Lose Weight"
          ? workouts.weight.dayOne[0]
          : pref === "Tone  Up"
          ? workouts.tone.dayOne[0]
          : pref === "Improve Fitness"
          ? workouts.fit.dayOne[0]
          : workouts.weight.dayOne[0];
      }
      if (this.state.dayTwo) {
        return pref === "Lose Weight"
          ? workouts.weight.dayTwo[0]
          : pref === "Tone Up"
          ? workouts.tone.dayTwo[0]
          : pref === "Improve Fitness"
          ? workouts.fit.dayTwo[0]
          : workouts.weight.dayTwo[0];
      }
      if (this.state.dayThree) {
        return pref === "Lose Weight"
          ? workouts.weight.dayThree[0]
          : pref === "Tone Up"
          ? workouts.tone.dayThree[0]
          : pref === "Improve Fitness"
          ? workouts.fit.dayThree[0]
          : workouts.weight.dayThree[0];
      }
      if (this.state.dayFour) {
        return pref === "Lose Weight"
          ? workouts.weight.dayFour[0]
          : pref === "Tone Up"
          ? workouts.tone.dayFour[0]
          : pref === "Improve Fitness"
          ? workouts.fit.dayFour[0]
          : workouts.weight.dayFour[0];
      }
    };
    //Determine second workout based on preferences

    const determineSecond = () => {
      let pref = localStorage.getItem("goal");
      if (this.state.dayOne) {
        return pref === "Lose Weight"
          ? workouts.weight.dayOne[1]
          : pref === "Tone Up"
          ? workouts.tone.dayOne[1]
          : pref === "Improve Fitness"
          ? workouts.fit.dayOne[1]
          : workouts.weight.dayOne[1];
      }
      if (this.state.dayTwo) {
        return pref === "Lose Weight"
          ? workouts.weight.dayTwo[1]
          : pref === "Tone Up"
          ? workouts.tone.dayTwo[1]
          : pref === "Improve Fitness"
          ? workouts.fit.dayTwo[1]
          : workouts.weight.dayTwo[1];
      }
      if (this.state.dayThree) {
        return pref === "Lose Weight"
          ? workouts.weight.dayThree[1]
          : pref === "Tone Up"
          ? workouts.tone.dayThree[1]
          : pref === "Improve Fitness"
          ? workouts.fit.dayThree[1]
          : workouts.weight.dayThree[1];
      }
      if (this.state.dayFour) {
        return pref === "Lose Weight"
          ? workouts.weight.dayOne[1]
          : pref === "Tone Up"
          ? workouts.tone.dayOne[1]
          : pref === "Improve Fitness"
          ? workouts.fit.dayOne[1]
          : workouts.weight.dayOne[1];
      }
    };

    const name = localStorage.getItem("name");

    const determine = determineFirst();
    const determine2 = determineSecond();

    var randomize = () => {
      let array = [];
      for (let i = 0; i < this.props.workouts.length - 3; i++) {
        array.push(this.props.workouts[i].title);
      }
      return array[Math.floor(Math.random() * array.length)];
    };

    const random = () => {
      this.setState({
        randomWorkout: true,
      });
    };

    const mapWorkouts = this.props.workouts.map((workouts) =>
      workouts !== "" ? (
        <div className="date" key={workouts.id}>
          <b>{workouts.title}</b> <br /> {workouts.descr} <br />{" "}
          <em>Tip: {workouts.tip}</em>
        </div>
      ) : null
    );

    const timeSplit = this.props.time.split(",");
    return (
      <div>
        {this.state.showAdd ? (
          <AddWorkout change={this.change} />
        ) : (
          <div>
            <header>
              Elevate
              <span className="text" onClick={this.changeBack}>
                Workout Plan
              </span>
              <span className="text" onClick={this.change}>
                My Workouts
              </span>
              <span className="text" onClick={this.signOut}>
                Sign Out
              </span>
            </header>
            {this.state.showFirst ? (
              <Modal closeModal={this.closeModal} determine={determine} />
            ) : null}
            {this.state.showSecond ? (
              <SecondModal
                closeSecondModal={this.closeSecondModal}
                determine2={determine2}
              />
            ) : null}

            {this.state.myWorkouts ? (
              <div>
                <h1>My Workouts</h1>
                {this.state.randomWorkout ? <h2>{randomize()}</h2> : null}
                {mapWorkouts}
                <p>
                  Click "Random Workout" to randomly generate a workout to do
                  today
                </p>
                <button className="btn-other" onClick={random}>
                  Random Workout
                </button>
              </div>
            ) : (
              <div>
                <h1>Welcome, {name} </h1>
                <h2> Base Plan </h2>
                <h3>Click "My Workouts" to manage your personal additions</h3>
                <div className="day">
                  {this.state.dayOne ? (
                    <div>
                      <span>&#8592;</span>
                      {this.props.days[0]}
                      <span onClick={this.dayTwo}> &#8594; </span>
                    </div>
                  ) : this.state.dayTwo ? (
                    <div>
                      <span onClick={this.dayOne}>&#8592;</span>
                      {this.props.days[1]}

                      <span onClick={this.dayThree}> &#8594; </span>
                    </div>
                  ) : this.state.dayThree ? (
                    <div>
                      <span onClick={this.dayTwo}>&#8592;</span>
                      {this.props.days[2]}

                      <span onClick={this.dayFour}> &#8594; </span>
                    </div>
                  ) : this.state.dayFour ? (
                    <div>
                      <span onClick={this.dayThree}>&#8592;</span>
                      {this.props.days[3]}

                      <span> &#8594; </span>
                    </div>
                  ) : null}
                  <div></div>
                  <div className="date" onClick={this.showModal}>
                    {determineFirst().name}
                    <br />
                    {<em>{timeSplit[0]}</em>}
                  </div>
                  <div className="date" onClick={this.showSecondModal}>
                    {determineSecond().name}
                    <br />
                    {<em>{timeSplit[1]}</em>}
                  </div>
                </div>
              </div>
            )}
            <button className="done" onClick={this.addWork}>
              Add Workout
            </button>
          </div>
        )}
      </div>
    );
  }
}

Workouts.defaultProps = {
  days: ["Mon", "Tues", "Weds", "Thurs"],
  time: "Morning,Afternoon",
  workouts: [],
};
