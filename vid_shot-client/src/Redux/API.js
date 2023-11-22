import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:8000/aak" })
const API = axios.create({ baseURL: "https://vid-shot-server.vercel.app/aak" })

API.interceptors.request.use(req => {
    if (localStorage.getItem('LoggedUser')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('LoggedUser')).token}`;
    }
    return req;
})

// Users
export const signUp = (credentials) => API.post(`/auth/signup`, credentials)
export const signIn = (credentials) => API.post(`/auth/signin`, credentials)
export const getuser = (userId) => API.get(`user/find/${userId}`)
export const editUser = (userId, editDetails) => API.put(`user/${userId}`, editDetails)
export const subsUser = (userId) => API.put(`user/sub/${userId}`)
export const unSubsUser = (userId) => API.put(`user/unsub/${userId}`)

// Videos
export const displayVideos = (type) => API.get(`/video/${type}`)
export const addVideos = (videoDetails) => API.post("/video", videoDetails)
export const getVideo = (userId) => API.get(`/video/find/${userId}`)
export const likeVideo = (videoId) => API.put(`user/like/${videoId}`)
export const dislikeVideo = (videoId) => API.put(`user/dislike/${videoId}`)
export const getByTags = (tags) => API.get(`/video/videotags?tags=${tags}`)
export const getByTitle = (search) => API.get(`/video/search?q=${search}`)

// COMMENT
export const addComment = (commentDetails) => API.post("/comment", commentDetails);
export const getComment = (videoId) => API.get(`/comment/${videoId}`);