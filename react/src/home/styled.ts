import {makeStyles} from '@material-ui/styles';

export const useStyle = makeStyles({
  home: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 400,
    margin: '120px auto',
    fontSize: '23px'
  },
  goBackButton: {
    marginTop: 40,
    '&:hover': {
      transition: '.7s',
      backgroundColor: '#2962ff',
      color: '#ffffff'
    }
  },
})