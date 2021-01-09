import React from "react";
import "../styles/summary.css";
import AuthApiService from "../auth-api-service";
import config from "../config";

export default class Summary extends React.Component {
  state = {
    hasError: false,
  };

  next = () => {
    this.props.history.push("/workouts");
    window.location.reload()
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
        .then(this.props.addPref)
        .then(this.next)
        .catch((error) => {
          this.setState({ hasError: true });
        });
  }


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
        AuthApiService.postLogin({
          email: email.value,
          password: password.value,
        });
      })
      .then(this.postPref)
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div>
        <header>Elevate</header>
        <h1>Sign Up</h1>
        <p>
         Sign up to view and manage your personalized workout plan
        </p>
        <div className="form-wrap">
          <form className="summary-form" id="landing-form" onSubmit={this.handleNewUser}>
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
            <button className="new" type="submit">
              Submit
            </button>
            {this.state.error ? this.state.error : null}
          </form>
        </div>
      </div>
    );
  }
}
