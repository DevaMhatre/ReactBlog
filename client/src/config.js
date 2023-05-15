import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://theblogspace.netlify.app/api/"
})