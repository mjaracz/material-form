import {makeStyles} from "@material-ui/styles";

export const useStyle = makeStyles({
  formWrapper: {
    margin: '40px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 450,
    height: 200
  },
  joinButton: {
    marginTop: 40,
    '&:hover': {
      transition: '.7s',
      backgroundColor: '#2962ff',
      color: '#ffffff'
    }
  },
  textField: {
    margin: '15px auto'
  }
})