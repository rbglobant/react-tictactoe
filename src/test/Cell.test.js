import React from "react";
import Enzyme from "enzyme";
import Cell from "../components/Cell";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

describe("<Cell />", () => {

  test("Cell populates with the passed prop value", () => {
    const wrapper = Enzyme.shallow(<Cell value={1}/>);
    expect(wrapper.html()).toMatchSnapshot();
  });
  
  test("Cell callback function is called on click", () => {
    console.log = jest.fn();
    const wrapper = Enzyme.shallow(<Cell value={1} onClick={() => {console.log('click')}}/>);
    wrapper.find(".game-container_board-cell").simulate("click");
    expect(console.log).toHaveBeenCalledWith('click');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
