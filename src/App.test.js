import React from 'react';
import Enzyme from 'enzyme';
import GameContainer from './components/GameContainer';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

describe('<GameContainer />', () => {

    test("Validate that it's X's turn when the game begins", () => {
      const wrapper = Enzyme.mount(<GameContainer/>);
      const winText = wrapper.find('.game-container_status').text();
      expect(winText).toBe(`X's turn`);
    });

    test("Validate it's O's turn after X plays", () => {
      const wrapper = Enzyme.mount(<GameContainer/>);
      wrapper.find('.game-container_board-cell').at(0).simulate('click');
      const winText = wrapper.find('.game-container_status').text();
      expect(winText).toBe(`O's turn`);
    });

    test("Validate that X wins the game", () => {
      const wrapper = Enzyme.mount(<GameContainer/>);
      wrapper.find('.game-container_board-cell').at(0).simulate('click');
      wrapper.find('.game-container_board-cell').at(4).simulate('click');
      wrapper.find('.game-container_board-cell').at(1).simulate('click');
      wrapper.find('.game-container_board-cell').at(5).simulate('click');
      wrapper.find('.game-container_board-cell').at(2).simulate('click');
      const winText = wrapper.find('.game-container_status').text();
      expect(winText).toBe(`X wins the game!`);
    });

    test("Validate that O wins the game", () => {
      const wrapper = Enzyme.mount(<GameContainer/>);
      wrapper.find('.game-container_board-cell').at(0).simulate('click');
      wrapper.find('.game-container_board-cell').at(3).simulate('click');
      wrapper.find('.game-container_board-cell').at(1).simulate('click');
      wrapper.find('.game-container_board-cell').at(4).simulate('click');
      wrapper.find('.game-container_board-cell').at(7).simulate('click');
      wrapper.find('.game-container_board-cell').at(5).simulate('click');
      const winText = wrapper.find('.game-container_status').text();
      expect(winText).toBe(`O wins the game!`);
    });

  afterEach(() => {
    jest.clearAllMocks();
  });
});