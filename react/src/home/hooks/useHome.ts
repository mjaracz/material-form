import {useEffect} from 'react';
import {clearSignUp, getSignUp} from '../../form/wrapper/redux/actions/fetchAction';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/types';

export const useHome = () => {
  const {signUp} = useSelector((state: RootState) => state.signUp);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSignUp());
    return () => dispatch(clearSignUp());
  }, [dispatch])

  return {
    signUp,
  }
}