import React from 'react';
import Enzyme from 'enzyme';
import GameContainer from './components/GameContainer';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

describe('<GameContainer />', () => {
  
    test("Validate it's O's turn after X plays", () => {
      const wrapper = Enzyme.mount(<GameContainer/>);
      wrapper.find('.game-container_board-cell').at(0).simulate('click');
      const winText = wrapper.find('.game-container_status').text();
      expect(winText).toBe(`O's turn`);
    });

  afterEach(() => {
    jest.clearAllMocks();
  });
});