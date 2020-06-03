import {checkPassword} from '../checkPassword';

describe('form/wrapper/utils checkPasswordOnSubmit function', () => {
  describe('when got empty password', () => {
    it('should return expected ValidationError', () => {
      expect(checkPassword('')).toEqual({isError: true, message: 'password is required'})
    });
  });
  describe('when got not empty and correct password', () => {
    it('should return ValidationError with false isError field ', () => {
      expect(checkPassword('notpassword')).toEqual({isError: false})
    });
  });
  describe('when got too short password', () => {
    it('should return expected ValidationError', () => {
      expect(checkPassword('cdk')).toEqual({isError: true, message: 'password is too short'})
    });
  })
})