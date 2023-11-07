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
    console.log("clicked");
    dispatch({ type: "LOGOUT"});
    navigate("/signin")
  } catch (error) {
    console.log(error.response.data.msg);
    alert(error.response.data.msg);
  }
};
