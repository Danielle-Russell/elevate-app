import React from "react";
import ReactDOM from "react-dom";
import Workouts from "../components/workouts";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
test("it should render", () => {
  shallow(<Workouts />);
});
