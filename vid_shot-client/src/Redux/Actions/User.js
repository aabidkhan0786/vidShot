import * as Api from "../API.js";

export const signUp = (credentials, navigate) => async (dispatch) => {
  try {
    const { data } = await Api.signUp(credentials);
    dispatch({ type: "AUTH", data });
    navigate("/");
  } catch (error) {
    console.log(error.response.data.msg);
    alert(error.response.data.msg);
  }
};

export const signIn = (credentials, navigate) => async (dispatch) => {
  try {
    const { data } = await Api.signIn(credentials);
    dispatch({ type: "AUTH", data });
    navigate("/");
  } catch (error) {
    console.log(error.response.data.msg);
    alert(error.response.data.msg);
  }
};
export const logout = (navigate) => async (dispatch) => {
  try {
    dispatch({ type: "LOGOUT"});
    navigate("/signin")
  } catch (error) {
    console.log(error.response.data.msg);
    alert(error.response.data.msg);
  }
};

export const getUser =(userId)=> async (dispatch)=> {
  try {
    const {data} = await Api.getuser(userId)
    return data
  } catch (error) {
    console.log(error.response.data.msg);
    alert(error.response.data.msg);
  }
}

export const editUser = (userId,userDetails)=> async (dispatch)=> {
  try {
    const {data} = await Api.editUser(userId,userDetails)
    dispatch({type:"UPDATE_USER",data})
    return data
  } catch (error) {
    console.log(error.response.data.msg);
    alert(error.response.data.msg);
  }
}
export const subsUser = (userId)=> async (dispatch)=> {
  try {
    const {data} = await Api.subsUser(userId)
    dispatch({type:"UPDATE_USER",data})
  } catch (error) {
    console.log(error.response.data.msg);
    alert(error.response.data.msg);
  }
}
export const unSubsUser = (userId)=> async (dispatch)=> {
  try {
    const {data} = await Api.unSubsUser(userId)
    dispatch({type:"UPDATE_USER",data})
  } catch (error) {
    console.log(error.response.data.msg);
    alert(error.response.data.msg);
  }
}
