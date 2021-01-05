import React from "react";
import { Route } from "react-router-dom";
import Landing from "./components/landing.js";
import Name from "./components/name.js";
import Age from "./components/age.js";
import Weight from "./components/weight.js";
import Height from "./components/height.js";
import Goals from "./components/goals.js";
import Time from "./components/time.js";
import Summary from "./components/summary.js";
import Workouts from "./components/workouts.js";

class App extends React.Component {
  state = {
    name: "",
    age: 0,
    weight: 0,
    height: 0,
    goals: [],
    time: [],
  };

  nameChange = (name) => {
    this.setState({
      name: name,
    });
  };

  setAge = (age) => {
    this.setState({
      age: age,
    });
  };

  setAge = (age) => {
    this.setState({
      age: age,
    });
  };

  setWeight = (weight) => {
    this.setState({
      weight: weight,
      weightKg: parseFloat(weight) * 0.45359237,
    });
  };

  setHeight = (height) => {
    this.setState({
      height: height,
    });
  };

  setGoals = (goals) => {
    this.setState({
      goals: [...this.state.goals, goals],
    });
  };

  setTime = (time) => {
    this.setState({
      time: [...this.state.time, time],
    });
  };

  render() {
  
    return (
      <div>
        <Route component={Landing} exact path="/" />
        <Route
          render={(props) => (
            <Name
              {...props}
              nameChange={this.nameChange}
              name={this.state.name}
            />
          )}
          path="/name"
        />
        <Route
          render={(props) => <Age {...props} setAge={this.setAge} />}
          path="/age"
        />
        <Route
          render={(props) => (
            <Weight
              {...props}
              setWeight={this.setWeight}
              weight={this.state.weight}
            />
          )}
          path="/weight"
        />
        <Route
          render={(props) => (
            <Height
              {...props}
              height={this.state.height}
              setHeight={this.setHeight}
              weight={this.state.weight}
            />
          )}
          path="/height"
        />
        <Route
          render={(props) => <Goals {...props} setGoals={this.setGoals} />}
          path="/goals"
        />
        <Route
          render={(props) => <Time {...props} setTime={this.setTime} />}
          path="/time"
        />
        <Route
          render={(props) => <Summary {...props} state={this.state} />}
          path="/summary"
        />
        <Route
          render={(props) => <Workouts {...props} state={this.state} />}
          path="/workouts"
        />
      </div>
    );
  }
}

export default App;
