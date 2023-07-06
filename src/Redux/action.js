export const handleLoginSuccess = (payload) => {
  return {
    type: 'SET_LOGIN_STATUS_SUCCESS',
    payload,
  };
};

export const handleLoginFailure = (payload) => {
  return {
    type: 'SET_LOGIN_STATUS_FAILURE',
    payload,
  };
};

export const handleUserList = (payload) => {
  return {
    type: 'ADD_USER',
    payload,
  };
};

export const handleGetUserList = (payload) => {
  return {
    type: 'GET_USER_LIST',
    payload,
  };
};

export const getdata = async (dispatch) => {
  try {
    let res = await fetch(`https://specialized.onrender.com/users`);
    res = await res.json();
    dispatch(handleGetUserList(res));
  } catch (error) {
    console.log(error);
  }
};

export const postdata = async (obj) => {
  try {
    let res = await fetch(`https://specialized.onrender.com/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
  } catch (error) {
    console.log(error);
  }
};

export const postUserStatus = async (id,dispatch) =>{
  try {
    let res = await fetch(
      `https://specialized.onrender.com/users/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login_status: true,
        }),
      }
    );
    dispatch(handleLoginSuccess(true))
  } catch (error) {
    dispatch(handleLoginSuccess(false))
  }
}