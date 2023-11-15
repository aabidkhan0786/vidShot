export const addComment = (commentDetails) => async (dispatch) => {
    try {
      const { data } = await Api.addComment(commentDetails);
      dispatch({ type: "ADD_COMMENT", data });
      return data
    } catch (error) {
      console.log(error.response.data.msg);
      alert(error.response.data.msg);
    }
  };