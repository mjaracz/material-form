import React from 'react';
import {useStyle} from './styled';
import {useHome} from './hooks/useHome';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

export const Home = () => {
  const {home, goBackButton} = useStyle();
  const {signUp} = useHome();

  return (
    <div className={home}>
      {
        signUp
          ? 'Great user exist '
          : 'User not exist '
      }
      <Button className={goBackButton} data-testid='backButton' component={Link} to='/' variant='outlined' color='primary' >
        Go Back
      </Button>
    </div>
  )
}