import React from 'react';
import {useHome} from '../../hooks/useHome';
import {renderHook, act} from '@testing-library/react-hooks';
import {TestingLibStoreProvider} from '../../../utils/testingLibStoreProvider';
import * as ReactRedux from 'react-redux';

describe('hooks/useHome', () => {
  let spyOnUseEffect;
  let spyOnDispatch;
  beforeEach(() => {
    spyOnUseEffect = jest.spyOn(React, 'useEffect');
    spyOnDispatch = jest.spyOn(ReactRedux, 'useDispatch');
  });
  afterAll(() => {
    jest.clearAllMocks()
  });
  it('should call useEffect and dispatch', () => {
    renderHook(() => useHome(), {wrapper: TestingLibStoreProvider});

    expect(spyOnUseEffect).toHaveBeenCalled();
    expect(spyOnDispatch).toHaveBeenCalled();
  });
});