import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Height from "../components/height";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Height />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});