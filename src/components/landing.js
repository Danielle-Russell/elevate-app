import React from "react";
import "../styles/landing.css";


export default class Landing extends React.Component {

  firstQuestion = () => {
    this.props.history.push("/name")
  }

  login = () => {
    this.props.history.push("/login")
  }
  render() {
    return (
      <div>
        <header>Elevate</header>
        <main className="wrapper">
          <div className="left-item">
          <img src="https://blog.fitbit.com/wp-content/uploads/2018/08/0816-summer-workouts-HERO.jpg" alt="woman running" />
          </div>
          <div className="right-item">
            <b>Personalized and Customizable Home Workouts For Beginners</b>
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
              <button onClick={this.firstQuestion} type="button"> New User </button>
            </form>
          </div>
        </main>
        <div className="secondWrapper">
        <img className="icon" src="https://img.icons8.com/fluent/96/000000/administrative-tools.png"/>  Customize your workouts 
        <img className="icon" src="https://img.icons8.com/fluent/96/000000/administrative-tools.png"/> Have a Plan
        <img className="icon" src="https://img.icons8.com/fluent/96/000000/administrative-tools.png"/> Track Completed Workouts
        </div>
      </div>
    );
  }
}