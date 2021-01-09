import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Goals from "../components/goals";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Goals />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});