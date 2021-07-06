import React from "react";
import Enzyme from "enzyme";
import GameContainer from "./components/GameContainer";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

describe("<GameContainer />", () => {
  test("validates that the component mounts", () => {
    const wrapper = Enzyme.shallow(<GameContainer />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Validate that it's X's turn when the game begins", () => {
    const wrapper = Enzyme.mount(<GameContainer />);
    const winText = wrapper.find(".game-container_status").text();
    expect(winText).toBe(`X's turn`);
  });

  test("Validate it's O's turn after X plays", () => {
    const wrapper = Enzyme.mount(<GameContainer />);
    wrapper.find(".game-container_board-cell").at(0).simulate("click");
    const winText = wrapper.find(".game-container_status").text();
    expect(winText).toBe(`O's turn`);
  });

  test("Validate that X wins the game", () => {
    const wrapper = Enzyme.mount(<GameContainer />);
    wrapper.find(".game-container_board-cell").at(0).simulate("click");
    wrapper.find(".game-container_board-cell").at(4).simulate("click");
    wrapper.find(".game-container_board-cell").at(1).simulate("click");
    wrapper.find(".game-container_board-cell").at(5).simulate("click");
    wrapper.find(".game-container_board-cell").at(2).simulate("click");
    const winText = wrapper.find(".game-container_status").text();
    expect(winText).toBe(`X wins the game!`);
  });

  test("Validate that O wins the game", () => {
    const wrapper = Enzyme.mount(<GameContainer />);
    wrapper.find(".game-container_board-cell").at(0).simulate("click");
    wrapper.find(".game-container_board-cell").at(3).simulate("click");
    wrapper.find(".game-container_board-cell").at(1).simulate("click");
    wrapper.find(".game-container_board-cell").at(4).simulate("click");
    wrapper.find(".game-container_board-cell").at(7).simulate("click");
    wrapper.find(".game-container_board-cell").at(5).simulate("click");
    const winText = wrapper.find(".game-container_status").text();
    expect(winText).toBe(`O wins the game!`);
  });

  test("Validate that the game ends in a Tie", () => {
    const wrapper = Enzyme.mount(<GameContainer />);
    wrapper.find(".game-container_board-cell").at(0).simulate("click");
    wrapper.find(".game-container_board-cell").at(1).simulate("click");
    wrapper.find(".game-container_board-cell").at(2).simulate("click");
    wrapper.find(".game-container_board-cell").at(4).simulate("click");
    wrapper.find(".game-container_board-cell").at(3).simulate("click");
    wrapper.find(".game-container_board-cell").at(5).simulate("click");
    wrapper.find(".game-container_board-cell").at(7).simulate("click");
    wrapper.find(".game-container_board-cell").at(6).simulate("click");
    wrapper.find(".game-container_board-cell").at(8).simulate("click");
    const winText = wrapper.find(".game-container_status").text();
    expect(winText).toBe(`Match result: Tie`);
  });

  test("Validate that the reset button works", () => {
    const wrapper = Enzyme.mount(<GameContainer />);
    wrapper.find(".game-container_board-cell").at(0).simulate("click");
    let winText = wrapper.find(".game-container_status").text();
    expect(winText).toBe(`O's turn`);
    wrapper.find("#game-container_restart").simulate("click");
    winText = wrapper.find(".game-container_status").text();
    expect(winText).toBe(`X's turn`);
  });

  test("Validate that the revert button works", () => {
    const wrapper = Enzyme.mount(<GameContainer />);
    wrapper.find(".game-container_board-cell").at(0).simulate("click");
    let winText = wrapper.find(".game-container_status").text();
    expect(winText).toBe(`O's turn`);
    wrapper.find("#game-container_revert").simulate("click");
    winText = wrapper.find(".game-container_status").text();
    expect(winText).toBe(`X's turn`);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
