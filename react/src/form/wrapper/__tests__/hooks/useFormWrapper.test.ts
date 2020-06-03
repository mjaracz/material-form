import {renderHook, act} from '@testing-library/react-hooks';
import {useFormWrapper} from '../../hooks/useFormWrapper';
import {TestingLibStoreProvider} from '../../../../utils/testingLibStoreProvider';
import * as checkEmailUtils from '../../utils.validation/checkEmail';
import * as checkPasswordUtils from '../../utils.validation/checkPassword';

describe('hooks/useFormWrapper', () => {
  let spyOnCheckEmailUtils;
  let spyOnCheckPasswordUtils;
  let testedHook;
  beforeEach(() => {
    testedHook = renderHook(() => useFormWrapper(), { wrapper: TestingLibStoreProvider }).result;
    spyOnCheckEmailUtils = jest.spyOn(checkEmailUtils, 'checkEmail');
    spyOnCheckPasswordUtils = jest.spyOn(checkPasswordUtils, 'checkPassword');
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('saveEmail function', () => {
    describe('when got correct event', () => {
      it('should set new email value', () => {
        act(() => {
          testedHook.current.saveEmail({target: {value: 'example@mail.com'}});
        });
        expect(testedHook.current.email).toEqual('example@mail.com');
      });
    });
    describe('when got incorrect event', () => {
      it('should not set new email value', () => {
        act(() => {
          testedHook.current.saveEmail({target: 'incorrect event'});
        });
        expect(testedHook.current.email).toEqual(undefined);
      });
    });
  });

  describe('savePassword function', () => {
    describe('when got correct event', () => {
      it('should set new password value', () => {
        act(() => {
          testedHook.current.savePassword({target: {value: 'exampleMockPassword'}});
        });
        expect(testedHook.current.password).toEqual('exampleMockPassword');
      });
    });
    describe('when got incorrect event', () => {
      it('should not set new email value', () => {
        act(() => {
          testedHook.current.savePassword({target: 'incorrect event'});
        });
        expect(testedHook.current.password).toEqual(undefined);
      });
    });
  });

  describe('onSubmit function', () => {
    it('should call checkEmail and checkPassword utils', () => {
      act(() => {
        testedHook.current.onSubmit();
      });

      expect(spyOnCheckEmailUtils).toHaveBeenCalled();
      expect(spyOnCheckPasswordUtils).toHaveBeenCalled();
    });
  });
})