import React from "react";
import "../styles/landing.css";
import AuthApiService from "../auth-api-service";
import TokenService from "../tokenService";

export default class Landing extends React.Component {
  state = {
    error: false,
  };
  firstQuestion = () => {
    this.props.history.push("/name");
  };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    const { email, password } = ev.target;

    AuthApiService.postLogin({
      email: email.value,
      password: password.value,
    })
      .then((res) => {
        email.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        const user = res.user;
        localStorage.setItem("user email", user.email);
        localStorage.setItem("firstname", user.firstname);
        localStorage.setItem("lastname", user.lastname);
        this.props.history.push("/workouts")
        window.location.reload();
      })
      .catch((res) => {
        console.log(res.message);
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div>
        <header>Elevate</header>
        <main className="wrapper">
          <div className="left-item">
            <img
              src="https://jooinn.com/images/woman-exercising-4.jpg"
              alt="woman running"
            />
          </div>
          <div className="right-item">
            <form onSubmit={this.handleSubmitJwtAuth}>
              {/*<label htmlFor="username"> Username </label>*/}
              <input
                id="username"
                type="text"
                placeholder="Username"
                name="email"
              />
              {/*<label htmlFor="password"> Password </label>*/}
              <input
                id="password"
                type="password"
                placeholder="Password"
                name="password"
              />
              <button id="login-btn" type="submit">
                Log In
              </button>
              {this.state.error ? this.state.error : null}
              <span>Forgot Password?</span>
              <hr />
              <button onClick={this.firstQuestion} type="button">
                New User
              </button>
            </form>
          </div>
        </main>
        <div className="secondWrapper">
          <div>
            <img
              className="icon"
              src="https://img.icons8.com/fluent/96/000000/administrative-tools.png"
            />{" "}
            <p>Customize your workouts </p>
          </div>
          <div>
            <img
              className="icon"
              src="https://img.icons8.com/cotton/64/000000/like--v4.png"
            />{" "}
            <p>Exercise your mind, body and soul</p>
          </div>
          <div>
            <img
              className="icon"
              src="https://img.icons8.com/cotton/64/000000/checklist--v3.png"
            />{" "}
            <p>Check your goals with a sustainable and effective plan</p>
          </div>
        </div>
        <footer>Danielle Russell 2020</footer>
      </div>
    );
  }
}
