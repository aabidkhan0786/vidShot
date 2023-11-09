import * as Api from "../API.js";

export const signUp = (credentials, navigate) => async (dispatch) => {
  try {
    const { data } = await Api.signUp(credentials);
    console.log({ cred: data });
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
    console.log({ cred: data });
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
    console.log(data);
    return data
  } catch (error) {
    
  }
}
