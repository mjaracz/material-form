import {isMatchRegExpMail} from './isMatchRegExpMail';
import {ValidationError} from '../types';

export function checkEmail(email: string): ValidationError {
  if(!email) return {isError: true, message: 'email is required'};
  else if (!isMatchRegExpMail(email)) return {isError: true, message: 'email is incorrect'}
  else if (isMatchRegExpMail(email)) return {isError: false}
}