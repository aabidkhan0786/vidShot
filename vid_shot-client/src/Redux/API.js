import axios from "axios";

const API = axios.create({baseURL:"http://localhost:8000/aak"})

API.interceptors.request.use(req=>{
    if(localStorage.getItem('LoggedUser')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('LoggedUser')).token}`;
        console.log(req.headers.Authorization.split(" ")[1]);
    }
    return req;
})

// Users
export const signUp = (credentials)=> API.post(`/auth/signup`,credentials)
export const signIn = (credentials)=> API.post(`/auth/signin`,credentials)
export const getuser = (userId)=> API.get(`user/find/${userId}`)

// Videos
export const displayVideos = (type)=> API.get(`/video/${type}`)
export const addVideos = (videoDetails)=> API.post("/video",videoDetails)