import React from "react";
import "../styles/modal.css";

export default class SecondModal extends React.Component {
    
  render() {
    return (
      <div id="modal-window" className="shadow">
        <div className="main-modal">
          <h1 className="workout-title">{this.props.determineSecond().name}</h1>
          <br />
          <div className="workoutPlan">
            <h2>Why</h2>
            <p>
            {this.props.determineSecond().why}
            </p>
          </div>
          <div className="workoutPlan">
            <h2>Tip</h2>
            <p>
            {this.props.determineSecond().tip}
            </p>
          </div>
          <button>Mark as Complete</button>
          <button onClick={this.props.closeSecondModal} className="close">
            X
          </button>
        </div>
      </div>
    );
  }
}
