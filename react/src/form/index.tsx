import React from 'react';
import {FormWrapper} from './wrapper/formWrapper';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/types';
import {CircularProgress} from '@material-ui/core'
import {useStyle} from './styled';

export const Form = () => {
  const {loading} = useSelector((state: RootState) => state.signUp);
  const {root} = useStyle();

  return (
    <div className={root}>
      {
        loading
          ? <CircularProgress size={80}/>
          : <FormWrapper/>
      }
    </div>
  )
};