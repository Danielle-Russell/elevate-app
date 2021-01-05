import React from "react";
import moment from "moment";
import "../styles/workouts.css";
import Modal from "./modal.js"

export default class Workouts extends React.Component {
    state = {
        show: false
    }

    showModal = () => {
        this.setState({
          show: true,
        });
      };
    
      closeModal = () => {
        this.setState({
          show: false
        })
      }

  render() {
    const currentDay = moment().format("dddd");
    const currentDate = moment().format("D");
    return (
      <div>
        <header>Elevate</header>
        {this.state.show ? <Modal closeModal={this.closeModal} /> : null}
        <div className="date">
          &#8592; {currentDay} &#8594; <br /> {currentDate}
        </div>
        <div className="date" onClick={this.showModal}>workout one</div>
      </div>
    );
  }
}
