export default (video = JSON.parse(localStorage.getItem("video")) || null, action) => {
    switch (action.type) {
        case "SAVE_VIDEO":
            console.log(action.data);
            localStorage.setItem("video", JSON.stringify(action?.data));
            return action.data
        case "SEARCH_VIDEO":
            console.log(action.data);
            localStorage.setItem("video", JSON.stringify(action?.data));
            return action.data
        case 'LIKE_VIDEO':
            const newState = video.map(v => (v._id === action.data._id ? action.data : v))
            localStorage.setItem("video", JSON.stringify(newState));
            return newState
        case 'DISLIKE_VIDEO':
            const newState1 = video.map(v => (v._id === action.data._id ? action.data : v))
            localStorage.setItem("video", JSON.stringify(newState1));
            return newState1
        default:
            return video;
    }

}