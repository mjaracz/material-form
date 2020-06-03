const initialState = {
  loading: false,
  signUp: undefined,
  error: ''
}
export const signUpReducer = (state = initialState, action: {type: string, payload: boolean | string}) => {
  switch(action.type) {
    case 'GET_SIGN_UP': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'FETCH_SIGN_UP': {
      return {
        ...state,
        loading: false,
        signUp: action.payload
      }
    }
    case 'ERROR_SIGN_UP': {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    case 'CLEAN_SIGN_UP': {
      return {
        ...state,
        loading: false,
        error: '',
        signUp: undefined
      }
    }
    default: {
      return state
    }
  }
}