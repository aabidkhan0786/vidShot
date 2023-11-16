import * as Api from "../API.js";

export const addVideos =(videoDetails)=> async (dispatch)=>{
    try {
        const {data} = await Api.addVideos(videoDetails)
        console.log({videoDetail:data});
        return data
    } catch (error) {
        console.log(error);
    }
}

export const displayVideos = (type)=> async (dispatch)=>{
    try {
        const {data} = await Api.displayVideos(type)
        console.log({videos:data});
        dispatch({type:"SAVE_VIDEO",data})
    } catch (error) {
        console.log(error);
    }
}
export const getByTags = (tags)=> async (dispatch)=>{
    try {
        const {data} = await Api.getByTags(tags)
        console.log({videos:data});
        // dispatch({type:"SAVE_VIDEO",data})
        return data
    } catch (error) {
        console.log(error);
    }
}

export const likeVideo = (videoId)=> async (dispatch)=> {
    try {
      const {data} = await Api.likeVideo(videoId)
      console.log(data);
      dispatch({type:"LIKE_VIDEO",data})
    //   return data
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg);
    }
  }
export const disLikeVideo = (videoId)=> async (dispatch)=> {
    try {
      const {data} = await Api.dislikeVideo(videoId)
      console.log(data);
      dispatch({type:"DISLIKE_VIDEO",data})
    //   return data
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }