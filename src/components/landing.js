import React from "react";
import "../styles/landing.css";
import AuthApiService from "../auth-api-service";
import TokenService from "../tokenService";

export default class Landing extends React.Component {
  state = {
    error: false,
    demo: false,
  };
  firstQuestion = () => {
    this.props.history.push("/name");
  };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    let { email, password } = ev.target;
    const dynamicEmail = !this.state.demo ? email.value : "demo@gmail.com";
    const dynamicPassword = !this.state.demo ? password.value : "12345678";
    AuthApiService.postLogin({
      email: dynamicEmail,
      password: dynamicPassword,
    })
      .then((res) => {
        email.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        const user = res.user;
        localStorage.setItem("user email", user.email);
        localStorage.setItem("firstname", user.firstname);
        localStorage.setItem("lastname", user.lastname);
        this.props.history.push("/workouts");
        window.location.reload();
      })
      .catch((res) => {
        console.log(res.message);
        this.setState({ error: res.error });
      });
  };

  demo = () => {
    this.setState({
      demo: true,
    });
  };

  render() {
    return (
      <div>
        <header>
          <h1 className="landing-title">Elevate</h1>
        </header>
        <main className="wrapper">
          <div className="left-item">
            <img
              src="https://jooinn.com/images/woman-exercising-4.jpg"
              alt="woman running"
            />
          </div>
          <div className="right-item">
            <form onSubmit={this.handleSubmitJwtAuth}>
              <label htmlFor="username"> Email </label>
              <input
                id="username"
                type="text"
                placeholder={this.state.demo ? "demo@gmail.com" : "Email"}
                name="email"
              />
              <label htmlFor="password"> Password </label>
              <input
                id="password"
                type="password"
                placeholder={this.state.demo ? "demopassword" : "Password"}
                name="password"
              />
              <button className="demo" onClick={this.demo}>
                Demo
              </button>
              <button className="new" type="submit">
                Log In
              </button>
              {this.state.error ? <span className="warning">{this.state.error}</span> : null}
              <hr />
              <button
                className="new"
                onClick={this.firstQuestion}
                type="button"
              >
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
              alt="settings icon"
            />{" "}
            <p>Customize your workouts </p>
          </div>
          <div>
            <img
              className="icon"
              src="https://img.icons8.com/cotton/64/000000/like--v4.png"
              alt="heart icon"
            />{" "}
            <p>Exercise your mind, body and soul</p>
          </div>
          <div>
            <img
              className="icon"
              src="https://img.icons8.com/cotton/64/000000/checklist--v3.png"
              alt="checklist icon"
            />{" "}
            <p>Check your goals with a sustainable and effective plan</p>
          </div>
        </div>
      </div>
    );
  }
}
