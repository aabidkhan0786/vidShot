import * as Api from "../API.js";

export const addComment = (commentDetails) => async (dispatch) => {
  try {
    const { data } = await Api.addComment(commentDetails);
    dispatch({ type: "ADD_COMMENT", data });
  } catch (error) {
    console.log(error);
    alert(error.response.data.msg);
  }
};
export const getComment = (videoId) => async (dispatch) => {
  try {
    const { data } = await Api.getComment(videoId);
    dispatch({ type: "GET_COMMENTS", data });
  } catch (error) {
    console.log(error);
    alert(error.response.data.msg);
  }
};