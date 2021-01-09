import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Summary from "../components/summary";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Summary />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});