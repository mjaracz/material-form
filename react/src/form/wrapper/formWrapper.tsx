import React from 'react';
import {Button} from '@material-ui/core';
import {useStyle} from './styled';
import {EmailWrapper} from './emailWrapper';
import {PasswordWrapper} from './passwordWrapper';
import {useFormWrapper} from './hooks/useFormWrapper';
import {Redirect} from 'react-router-dom';

export const FormWrapper = () => {
  const {formWrapper, joinButton} = useStyle();
  const {onSubmit, saveEmail, savePassword, emailError, passwordError, redirect} = useFormWrapper();

  if (redirect) {
    return <Redirect data-testid='redirect' to='/home' />
  }
  return (
    <div className={formWrapper}>
      <EmailWrapper saveEmail={saveEmail} validation={emailError}/>
      <PasswordWrapper savePassword={savePassword} validation={passwordError}/>
      <Button className={joinButton} variant='outlined' color='primary' onClick={onSubmit}>
        Join As
      </Button>
    </div>
  )
}