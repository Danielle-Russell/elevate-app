import React from "react";
import config from "../config";

export default class AddWorkout extends React.Component {
  state = {
    hasError: false,
  };
  next = () => {
    this.props.history.push("/workouts");
    window.location.reload();
  };

  postWork = (e) => {
    e.preventDefault();
    let id = localStorage.getItem("user email");
    let work = {
      userid: id,
      title: e.target.title.value,
      descr: e.target.descr.value,
      tip: e.target.tip.value,
    };
    fetch(`${config.API_ENDPOINT}/api/workouts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(work),
    })
      .then((response) => {
        return response.json();
      })
      .then(this.props.addWorkout)
      .then(this.next)
      .catch((error) => {
        console.log(error);
      });
  };

  back = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <header>
          {" "}
          <span onClick={this.back}>&#8592;</span> Elevate{" "}
        </header>{" "}
        <br />
        <div className="form-wrap">
          <form id="landing-form" onSubmit={this.postWork}>
            <b className="log"> New Workout </b>
            <br />
            <br />
            <label htmlFor="title">Title: </label>
            <input name="title" type="text" placeholder="Title" required />
            <label htmlFor="descr">Description: </label>
            <input
              name="descr"
              type="text"
              placeholder="Describe your workout"
              required
            />
            <label htmlFor="tip">Tip: </label>
            <input
              name="tip"
              type="text"
              placeholder="e.g. Don't forget to bring water!"
              required
            />
            <button className="new" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
