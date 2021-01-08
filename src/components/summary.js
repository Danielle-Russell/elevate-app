import React from "react";
import "../styles/summary.css";
import AuthApiService from "../auth-api-service";
import config from "../config";

export default class Summary extends React.Component {
  state = {
    hasError: false,
  };
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
  postPref = () => {
    let id = localStorage.getItem("user email");
    let preferences = {
      userid: id,
      name: this.props.state.name,
      age: 0,
      weight: parseInt(this.props.state.weight),
      height: this.props.state.height,
      goals: this.props.state.goals[0][0].name,
      time:
        this.props.state.time[0][0].name +
        "," +
        this.props.state.time[0][1].name,
      days:
        this.props.state.days[0][0].name +
        "," +
        this.props.state.days[0][1].name +
        "," +
        this.props.state.days[0][2].name +
        "," +
        this.props.state.days[0][3].name,
    };
    fetch(`${config.API_ENDPOINT}/api/preferences`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferences),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => this.props.addPref(data))
      .catch((error) => {
        this.setState({ hasError: true });
      });
  };

  handleNewUser = (ev) => {
    ev.preventDefault();
    const { firstname, lastname, email, password } = ev.target;

    AuthApiService.postUser({
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value,
    })
      .then((user) => {
        this.setState({ error: false });
        localStorage.setItem("user email", email.value);
        localStorage.setItem("firstname", firstname.value);
        localStorage.setItem("lastname", lastname.value);
        AuthApiService.postLogin({
          email: email.value,
          password: password.value,
        });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  next = () => {
    this.props.history.push("/workouts")
      }
  render() {
    return (
      <div>
        <div className="goal-con">
          <h1>Goal </h1>
          <br /> {this.determineIcon()} <br /> <p>{this.array()}</p>
        </div>
        <p>
          {this.props.state.name}, based on the information you have given us,
          we have determined a personal workout plan that we believe is best
          suited to you. Follow the directions to customize your workout plans.
          Happy working out!
        </p>
        <div className="form-wrap">
          <form id="landing-form" onSubmit={this.handleNewUser}>
            <b className="log"> Create Account</b>
            <br />
            <br />
            <label htmlFor="firstname">First Name: </label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              placeholder="First Name"
              required
            />
            <label htmlFor="lastname">Last Name: </label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Last Name"
              required
            />
            <label htmlFor="email">Email: </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="email"
              required
            />
            <label htmlFor="password">Password (8 Characters): </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="password"
              required
            />
            <button onClick={this.postPref} className="new" type="submit">
              Submit
            </button>
            <button className="done" onClick={this.next}>See Plans</button>
           
          </form>
        </div>
      </div>
    );
  }
}
