import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Age from "../components/age";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Age />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});