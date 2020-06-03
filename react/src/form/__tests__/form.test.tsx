import React from 'react';
import {render} from '@testing-library/react';
import {Form} from '../index';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

describe('<Form/>', () => {
  describe('when loading redux state is true', () => {
    it('should match snapshot',  () => {
      const mockStore = configureStore();
      const element = render(
        <Provider store={mockStore({signUp: {loading: true}})}>
          <Form/>
        </Provider>
      );

      expect(element).toBeDefined();
      expect(element).toMatchSnapshot();
    });
  });
  describe('when loading redux state is false', () => {
    it('should match snapshot',  () => {
      const mockStore = configureStore();
      const element = render(
        <Provider store={mockStore({signUp: {loading: false}})}>
          <Form/>
        </Provider>
      );

      expect(element).toBeDefined();
      expect(element).toMatchSnapshot();
    });
  })

})