import {checkEmail} from '../checkEmail';

describe('form/wrapper/utils checkEmailOnSubmit function', () => {
  describe('when got empty email', () => {
    it('should return expected ValidationError', () => {
      expect(checkEmail('')).toEqual({isError: true, message: 'email is required'})
    });
  });
  describe('when got not empty and correct email', () => {
    it('should return ValidationError with false isError field ', () => {
      expect(checkEmail('mail@gmail.com')).toEqual({isError: false})
    });
  });
  describe('when got not empty and incorrect email', () => {
    it('should return expected ValidationError', () => {
      expect(checkEmail('IncorrectEmail')).toEqual({isError: true, message: 'email is incorrect'})
    });
  })
})