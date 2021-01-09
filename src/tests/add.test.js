import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AddWorkout from "../components/add";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <AddWorkout />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
