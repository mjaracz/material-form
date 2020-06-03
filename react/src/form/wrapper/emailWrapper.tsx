import React from 'react';
import {TextField} from '@material-ui/core';
import {useStyle} from './styled';
import {EmailWrapperProps} from './types';

export const EmailWrapper = (props: EmailWrapperProps) => {
  const {validation: {isError, message}, saveEmail} = props;
  const {textField} = useStyle();

  return isError
    ? <TextField data-testid="textFieldError" className={textField} error helperText={message} onChange={saveEmail} label='email' />
    : <TextField data-testid="textFieldExpected" className={textField} autoComplete='current-username' onChange={saveEmail} label='email' />
}