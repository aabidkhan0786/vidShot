export default (video = JSON.parse(localStorage.getItem("video")) || null, action) => {
    switch (action.type) {
        case "SAVE_VIDEO":
            localStorage.setItem("video", JSON.stringify(action?.data));
            return action.data
        case "SEARCH_VIDEO":
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
        case 'CURRENT_VIDEO':
            const currentVideo = video.filter(v => (v._id === action.video._id))
            localStorage.setItem("video", JSON.stringify(currentVideo));
            return currentVideo
        default:
            return video;
    }

}