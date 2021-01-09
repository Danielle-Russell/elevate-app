import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Name from "../components/name";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Name/>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});