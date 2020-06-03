import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {store} from '../redux/store';

export const TestingLibStoreProvider: FC = ({children}) =>
  <Provider store={store}>
    {children}
  </Provider>;
