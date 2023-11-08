import * as Api from "../API.js";

export const addVideos =(videoDetails)=> async (dispatch)=>{
    try {
        const {data} = await Api.addVideos(videoDetails)
        console.log({videoDetail:data});
        // dispatch({type:'ADD_VIDEO',data})
        return data
    } catch (error) {
        console.log(error);
    }
}

export const displayVideos = (type)=> async (dispatch)=>{
    try {
        const {data} = await Api.displayVideos(type)
        console.log({videos:data});
        return data
    } catch (error) {
        
    }
}