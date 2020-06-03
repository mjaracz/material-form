import {isMatchRegExpPassword} from './isMatchRegExpPassword';
import {ValidationError} from '../types';

export const checkPassword = (password: string): ValidationError => {
  if (!password) return {isError: true, message: 'password is required'};
  else if (!isMatchRegExpPassword(password)) return {isError: true, message: 'password is too short'};
  else if (isMatchRegExpPassword(password)) return {isError: false}
}