import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {PasswordWrapper} from '../passwordWrapper';

describe('<PasswordWrapper/>', () => {
  describe('when pass correct props', () => {
    describe('and props validation.isError is true', () => {
      let GetByTestId;
      let BaseElement;
      beforeEach(() => {
        const {getByTestId, baseElement} = render(
          <PasswordWrapper validation={{isError: true}} savePassword={jest.fn()} />
        )
        GetByTestId = getByTestId;
        BaseElement = baseElement;
      });

      it('should render <TextField error/>', () => {
        fireEvent.change(GetByTestId('textFieldError'));
        expect(GetByTestId('textFieldError')).toBeDefined();
      });
      it('wrapper should match snapshot', () => {
        expect(BaseElement).toMatchSnapshot();
      });
    });
    describe('and props validation.isError is false', () => {
      let GetByTestId;
      let BaseElement;
      beforeAll(() => {
        const {getByTestId, baseElement} = render(
          <PasswordWrapper validation={{isError: false}} savePassword={jest.fn()} />
        )
        GetByTestId = getByTestId;
        BaseElement = baseElement;
      });
      it('should render <TextField/>', () => {
        fireEvent.change(GetByTestId('textFieldExpected'));
        expect(GetByTestId('textFieldExpected')).toBeDefined();
      });
      it('wrapper should match snapshot', () => {
        expect(BaseElement).toMatchSnapshot();
      });
    });
  })
});
