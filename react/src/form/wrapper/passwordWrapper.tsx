import React from 'react';
import {TextField} from '@material-ui/core';
import {useStyle} from './styled';
import {PasswordWrapperProps} from './types';

export const PasswordWrapper = (props: PasswordWrapperProps) => {
  const {validation: {isError, message}, savePassword} = props
  const {textField} = useStyle();

  return isError
    ? <TextField data-testid='textFieldError' className={textField} error helperText={message} type='password' label='password' onChange={savePassword} />
    : <TextField data-testid='textFieldExpected' className={textField} autoComplete='current-password' type='password' label='password' onChange={savePassword} />
}