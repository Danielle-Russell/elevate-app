import React from "react";
import moment from "moment";
import "../styles/workouts.css";
import Modal from "./modal.js";
import SecondModal from "./secondModal.js";

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
    const workouts = {
      weight: {
        dayOne: [
          {
            name: "Run",
            why:
              "Not only is running a great calorie burner, it also helps you to gain fitness AND gain muscle tone",
            tip:
              "Aim for a steady jog, but if short sprints works better for you, then go for it! Both will burn roughly 500 calories, but a steady pace will improve your endurance",
            time: this.props.state.time[0],
          },
          {
            name: "Nature walk",
            why:
              "Not only is walking great for your heart, muscles, and weight loss, it has been proven to be a mood lifter. Add nature to the equation, and you have a workout and a free meditation!",
            tip:
              "Try to go without phone screens to clear your mind. Also, try to keep the pace as close to a power walk as possible to make sure those calories are burning",
            time: this.props.state.time[1],
          },
        ],
        dayTwo: [
          {
            name: "Box Step Ups",
            why:
              "Box step ups are not only great cardio for weight loss, but also are a great workout for your glutes",
            tip:
              "Pump some of your favorite tunes to get motivated and keep up the pace!",
            time: this.props.state.time[0],
          },
          {
            name: "Dance",
            why: "",
            tip: "",
            time: this.props.state.time[1],
          },
        ],
        dayThree: [
          {
            name: "Running",
            why: "",
            tip: "",
            time: this.props.state.time[0],
          },
          {
            name: "Nature Walk",
            why: "",
            tip: "",
            time: this.props.state.time[1],
          },
        ],
        dayFour: [
          {
            name: "Crunches",
            why: "",
            tip: "",
            time: this.props.state.time[0],
          },
          {
            name: "Walk",
            why: "",
            tip: "",
            time: this.props.state.time[1],
          },
        ],
      },
      fit: {
        dayOne: [
          {
            name: "Run",
            why: "",
            tip: "",
            time: this.props.state.time[0],
          },
          {
            name: "Nature walk",
            why: "",
            tip: "",
            time: this.props.state.time[1],
          },
        ],
        dayTwo: [
          {
            name: "Box Step Ups",
            why: "",
            tip: "",
            time: this.props.state.time[0],
          },
          {
            name: "Dance",
            why: "",
            tip: "",
            time: this.props.state.time[1],
          },
        ],
        dayThree: [
          {
            name: "Running",
            why: "",
            tip: "",
            time: this.props.state.time[0],
          },
          {
            name: "Nature Walk",
            why: "",
            tip: "",
            time: this.props.state.time[1],
          },
        ],
        dayFour: [
          {
            name: "Crunches",
            why: "",
            tip: "",
            time: this.props.state.time[0],
          },
          {
            name: "Walk",
            why: "",
            tip: "",
            time: this.props.state.time[1],
          },
        ],
      },
      tone: {
        dayOne: [
          {
            name: "Squats and Lunges",
            why: "",
            tip: "",
            time: this.props.state.time[0],
          },
          {
            name: "Nature Walk",
            why: "",
            tip: "",
            time: this.props.state.time[1],
          },
        ],
        dayTwo: [
          {
            name: "Crunches",
            why: "",
            tip: "",
            time: this.props.state.time[0],
          },
          {
            name: "Situps",
            why: "",
            tip: "",
            time: this.props.state.time[1],
          },
        ],
        dayThree: [
          {
            name: "Pushups",
            why: "",
            tip: "",
            time: this.props.state.time[0],
          },
          {
            name: "Squats and Lunges",
            why: "",
            tip: "",
            time: this.props.state.time[1],
          },
        ],
        dayFour: [
          {
            name: "Situps",
            why: "",
            tip: "",
            time: this.props.state.time[0],
          },
          {
            name: "Pushups",
            why: "",
            tip: "",
            time: this.props.state.time[1],
          },
        ],
      },
    };

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
          ? workouts.weight.dayOne[0]
          : this.goalsArray() === "Tone Up"
          ? workouts.tone.dayOne[0]
          : this.goalsArray() === "Improve Fitness"
          ? workouts.fitness.dayOne[0]
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

    const determineId = () => {
        this.state.completed.map(name => {
            if(name === determineFirst().name) {
                return "green"
            } else {
                return "red"
            }
        })
      };
      console.log(determineId())

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

        <div className="date">
          {this.state.dayOne ? (
            <div>
              <span>&#8592;</span> Mon
              <span onClick={this.dayTwo}> &#8594; </span>
            </div>
          ) : this.state.dayTwo ? (
            <div>
              <span onClick={this.dayOne}>&#8592;</span> Weds
              <span onClick={this.dayThree}> &#8594; </span>
            </div>
          ) : this.state.dayThree ? (
            <div>
              <span onClick={this.dayTwo}>&#8592;</span> Fri
              <span onClick={this.dayFour}> &#8594; </span>
            </div>
          ) : this.state.dayFour ? (
            <div>
              <span onClick={this.dayThree}>&#8592;</span> Sun
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
