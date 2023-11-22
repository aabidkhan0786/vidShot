import * as Api from "../API.js";

export const addVideos = (videoDetails) => async (dispatch) => {
    try {
        const { data } = await Api.addVideos(videoDetails)
        return data
    } catch (error) {
        console.log(error);
    }
}
export const getVideo = (userId) => async (dispatch) => {
    try {
        const { data } = await Api.getVideo(userId)
        return data
    } catch (error) {
        console.log(error);
    }
}

export const displayVideos = (type) => async (dispatch) => {
    try {
        const { data } = await Api.displayVideos(type)
        dispatch({ type: "SAVE_VIDEO", data })
    } catch (error) {
        console.log(error);
    }
}
export const getByTags = (tags) => async (dispatch) => {
    try {
        const { data } = await Api.getByTags(tags)
        return data
    } catch (error) {
        console.log(error);
    }
}
export const getByTitle = (search) => async (dispatch) => {
    try {
        const { data } = await Api.getByTitle(search)
        console.log({ videos: data });
        dispatch({ type: "SEARCH_VIDEO", data })
    } catch (error) {
        console.log(error);
    }
}

export const likeVideo = (videoId) => async (dispatch) => {
    try {
        const { data } = await Api.likeVideo(videoId)
        dispatch({ type: "LIKE_VIDEO", data })
    } catch (error) {
        console.log(error);
        alert(error.response.data.msg);
    }
}
export const disLikeVideo = (videoId) => async (dispatch) => {
    try {
        const { data } = await Api.dislikeVideo(videoId)
        dispatch({ type: "DISLIKE_VIDEO", data })
    } catch (error) {
        console.log(error);
        alert(error);
    }
}
export const currentVideo = (video) => async (dispatch) => {
    try {
        dispatch({ type: "CURRENT_VIDEO", video })
    } catch (error) {
        console.log(error);
        alert(error);
    }
}