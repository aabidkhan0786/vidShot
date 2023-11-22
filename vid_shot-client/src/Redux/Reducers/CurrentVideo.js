export default (currentVideo = JSON.parse(localStorage.getItem("CurrentVideo")) || null, action) => {
    switch (action.type) {
        case 'CURRENT_VIDEO':
            localStorage.setItem("CurrentVideo", JSON.stringify(action.video));
            return action.video
        case 'LIKE_VIDEO':
            localStorage.setItem("CurrentVideo", JSON.stringify(action.data));
            return action.data
        case 'DISLIKE_VIDEO':
            localStorage.setItem("CurrentVideo", JSON.stringify(action.data));
            return action.data    
        default:
            return currentVideo;
    }
}