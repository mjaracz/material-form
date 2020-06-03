import React from 'react';
import {Home} from '../';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter} from 'react-router-dom';

describe('<Home/>', () => {
  it('should render try again button', function () {
    const mockStore = configureStore()
    const {getByTestId} = render(
      <BrowserRouter>
        <Provider store={mockStore({signUp: {signUp: true}})}>
          <Home/>
        </Provider>
      </BrowserRouter>
    )
    expect(getByTestId('backButton')).toBeDefined();
  });
  describe('when signUp store is true', () => {
    it('should be defined and match snapshot', () => {
      const mockStore = configureStore();
      const element = render(
        <BrowserRouter>
          <Provider store={mockStore({signUp: {signUp: true}})}>
            <Home/>
          </Provider>
        </BrowserRouter>
      )

      expect(element).toBeDefined();
      expect(element).toMatchSnapshot();
    });
  })
  describe('when signUp store is false', () => {
    it('should be defined and match snapshot', () => {
      const mockStore = configureStore()
      const element = render(
        <BrowserRouter>
          <Provider store={mockStore({signUp: {signUp: false}})}>
            <Home/>
          </Provider>
        </BrowserRouter>
      )

      expect(element).toBeDefined();
      expect(element).toMatchSnapshot();
    });
  })
});
