import {ChangeEvent, useState} from 'react';
import {ValidationError} from '../types';
import {checkEmail} from '../utils.validation/checkEmail';
import {checkPassword} from '../utils.validation/checkPassword';

export const useFormWrapper = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordError, setPasswordError] = useState<ValidationError>({isError: false});
  const [emailError, setEmailError] = useState<ValidationError>({isError: false});
  const [redirect, setRedirect] = useState<boolean>();

  const saveEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const savePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onSubmit = () => {
    setEmailError(checkEmail(email));
    setPasswordError(checkPassword(password));
    if (!checkEmail(email).isError && !checkPassword(password).isError) setRedirect(true);
  };

  return {
    saveEmail,
    savePassword,
    onSubmit,
    passwordError,
    emailError,
    password,
    email,
    redirect,
    setRedirect,
    setEmailError,
    setPasswordError,
  }
}