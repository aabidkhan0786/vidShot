export default (comment = JSON.parse(localStorage.getItem("comment")) || null, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            localStorage.setItem("comment", JSON.stringify([action?.data]));
            return [...comment, action.data]
        case "GET_COMMENTS":
            localStorage.setItem("comment", JSON.stringify([...action?.data]));
            return action.data
        default:
            return comment;
    }
}