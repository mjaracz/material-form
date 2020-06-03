import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {FormWrapper} from '../formWrapper';
import {TestingLibStoreProvider} from '../../../utils/testingLibStoreProvider';

describe('<FormWrapper/>', () => {
  describe('when StoreProvider was mount ', () => {
    it('should correct fire event and match the snapshot', () => {
      const {getByText, baseElement} = render(
        <TestingLibStoreProvider>
          <FormWrapper/>
        </TestingLibStoreProvider>
      )

      fireEvent.click(getByText('Join As'));
      expect(baseElement).toBeDefined();
      expect(baseElement).toMatchSnapshot()
    });
  });
});