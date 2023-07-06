const initState = {
    UserList: [],
    isLoading: false,
    isError: false,
    login_status: false,
  };
  
  export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
      case 'SET_LOGIN_STATUS_SUCCESS':
        return {
          ...state,
          login_status: true,
        };
      case 'SET_LOGIN_STATUS_FAILURE':
        return {
          ...state,
          login_status: false,
        };
      case 'ADD_USER':
        return {
          ...state,
          UserList: [...state.UserList, payload],
        };
      case 'GET_USER_LIST':
        return {
          ...state,
          UserList: payload,
        };
      default:
        return state;
    }
  };
  