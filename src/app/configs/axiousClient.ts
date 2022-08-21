import axios from "axios";
export const axiosClient = axios.create({
    baseURL: "https://tienphong.vn/rss/",
    headers: {
        "Content-Type": "application/xml"
    }
});
axios.interceptors.response.use(function (response) {
    return response;
},function (error){
    return Promise.reject(error);
})
