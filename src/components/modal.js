import React from "react";
import "../styles/modal.css";

export default class Modal extends React.Component {
  render() {
    return (
      <div id="modal-window" className="shadow">
        <div className="main-modal">
          <h1 className="workout-title">Running</h1>
          <br />
          <div className="workoutPlan">
              <h2>How</h2>
              <p>Run for 2 miles or for 30 minutes</p>
              </div>
          <div className="workoutPlan">
            <h2>Why</h2>
            <p>
              Not only does running burn calories for weight loss, it also helps
              to strengthen your glutes in order to tone up.
            </p>
          </div>
          <div className="workoutPlan">
            <h2>Tip</h2>
            <p>
              Aim for a steady jog to improve endurance and last longer, but if
              short sprints work better for you, then go for it!
            </p>
          </div>
          <button>Mark as Complete</button>
          <button onClick={this.props.closeModal} className="close">
            X
          </button>
        </div>
      </div>
    );
  }
}
