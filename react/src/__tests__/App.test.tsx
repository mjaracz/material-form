import React from 'react';
import {render} from '@testing-library/react';
import App from '../App';
import {TestingLibStoreProvider} from "../utils/testingLibStoreProvider";

describe('<App/>', () => {
  it('should be defined', () => {
    const element = render(
      <TestingLibStoreProvider>
        <App/>
      </TestingLibStoreProvider>
    )
    expect(element).toBeDefined();
  });
})