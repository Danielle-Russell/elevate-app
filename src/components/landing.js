import React from "react";
import "../styles/landing.css";

export default class Landing extends React.Component {
  firstQuestion = () => {
    this.props.history.push("/name");
  };

  login = () => {
    this.props.history.push("/login");
  };
  render() {
    return (
      <div>
        <header>
          Elevate
        </header>
        <main className="wrapper">
          <div className="left-item">
            <img
              src="https://jooinn.com/images/woman-exercising-4.jpg"
              alt="woman running"
            />
          </div>
          <div className="right-item">
            <form>
              {/*<label htmlFor="username"> Username </label>*/}
              <input id="username" type="text" placeholder="Username" />
              {/*<label htmlFor="password"> Password </label>*/}
              <input id="password" type="password" placeholder="Password" />
              <button id="login-btn" type="submit">
                Log In
              </button>
              <span>Forgot Password?</span>
              <hr />
              <button onClick={this.firstQuestion} type="button">
                {" "}
                New User{" "}
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
