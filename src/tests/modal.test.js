import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Modal from "../components/modal";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Modal />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});