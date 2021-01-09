import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Weight from "../components/weight";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Weight />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});