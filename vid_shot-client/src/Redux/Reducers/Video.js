export default (video = JSON.parse(localStorage.getItem("video")) || null, action) => {
    switch (action.type) {
        case "SAVE_VIDEO":
            localStorage.setItem("video", JSON.stringify(action?.data));
            return action.data
        case "SEARCH_VIDEO":
            localStorage.setItem("video", JSON.stringify(action?.data));
            return action.data
        default:
            return video;
    }
}