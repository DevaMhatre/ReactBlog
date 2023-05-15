import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://react-blog-new.onrender.com/api/"
})