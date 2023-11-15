export default (comment = [JSON.parse(localStorage.getItem("comment"))] || null, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            console.log(action.data);
            localStorage.setItem("comment", JSON.stringify(action?.data));
            return [...comment,action.data]
        case "GET_COMMENTS":
            console.log(action.data);
            localStorage.setItem("comment", JSON.stringify(action?.data));
            return action.data
        // case 'LIKE_VIDEO':
        //     const newState = video.map(v => (v._id === action.data._id ? action.data : v))
        //     localStorage.setItem("video", JSON.stringify(newState));
        //     return newState
        // case 'DISLIKE_VIDEO':
        //     const newState1 = video.map(v => (v._id === action.data._id ? action.data : v))
        //     localStorage.setItem("video", JSON.stringify(newState1));
        //     return newState1
        default:
            return comment;
    }

}