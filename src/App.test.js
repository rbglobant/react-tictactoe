import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GameContainer from './components/GameContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('<GameContainer />', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = Enzyme.shallow(<GameContainer />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});